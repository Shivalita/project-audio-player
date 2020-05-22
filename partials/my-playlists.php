<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';
?>

<!-- <div class="container-fluid">

    <div class="h-50">
        <h3>Your playlists</h3>
        <div id="yourPlaylists"> -->
            <?php

/* Get all user's playlists */
// $req = $database->prepare('SELECT * from playlists WHERE user_id = ? ORDER BY id DESC');
// $req->execute([$_SESSION['userId']]);
// $myPlaylists = $req->fetchAll(PDO::FETCH_ASSOC);

// $myPlaylistsCount = count($myPlaylists);

// if ($myPlaylistsCount === 0) {
//     echo (`
//         <div class="row justify-content-around text-center mt-4">
//             <div id="noPlaylist" class="col-12 mb-5">
//                 <h2 class="my-5"><b class="text-white">You haven\'t created any playlists yet<b></h2>
//                 <h4 class="text-white my-4">Create a playlist of your own liking right now!</h4>
//             </div>
//         </div>
//         `);
// } else {
//     echo (`
//         <div class="row text-center text-white mb-5">
//             <div class="col-12">
//             `);
//     foreach ($myPlaylists as $myPlaylist) {
//         echo ("<li class='list-inline-item'>- ".$myPlaylist['playlist_title']."</li>");
//     }
//     echo (`
//             </div>
//         </div>
//     `);
// }
            ?>

        <!-- </div>
    </div>

    <div class="h-50">
        <h3 class="text-white">Create a new playlist</h3>
        <form action='apps/create-playlist.php' method='POST' enctype="multipart/form-data" id="createPlaylists">
            <div>
                <label class="text-white" for='playlistTitle'>Name your new playlist :</label>
                <input type='textarea' name='playlistTitle' id="playlistTitle" class="my-1">
            </div>

            <div>
                <label class="text-white" for='playlistImage'>Choose an image for your playlist :</label>
                <input type="file" id="playlistImage" name="playlistImage" accept=".jpg, .jpeg, .png, .gif">
            </div>

            <div>
                <input type='submit' id="create" value='Create' class="my-1">
            </div>
        </form>
    </div>

</div> -->

<div class="h-50">
    <h3 class="text-white">Create a new playlist</h3>
    <form action='test.php' method='POST' enctype="multipart/form-data" id="createPlaylists">
        <div>
            <label class="text-white" for='playlistTitle'>Name your new playlist :</label>
            <input type='textarea' name='playlistTitle' id="playlistTitle" class="my-1">
        </div>

        <div>
            <label class="text-white" for='playlistImage'>Choose an image for your playlist :</label>
            <input type="file" id="playlistImage" name="playlistImage" accept=".jpg, .jpeg, .png, .gif">
        </div>

        <div>
            <input type='submit' id="create" value='Create' class="my-1">
        </div>
    </form>
</div>

<?php
//create session and include the partial to get our classes when called on the index
include('../config/autoload.php');

//create a new PDO and connect to my db
$pdo = new PDO(
    'mysql:host=127.0.0.1;dbname=audio_player;charset=utf8', 
    'root', 
    '',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

//create a new manager
$PlaylistsManager = new PlaylistsManager($pdo);

if (isset($_FILES['playlistImage']) AND $_FILES['playlistImage']['error'] == 0)
{
        if ($_FILES['playlistImage']['size'] <= 1000000)
        {
                $fileinfo = pathinfo($_FILES['playlistImage']['name']);
                $extension_upload = $fileinfo['extension'];
                $extensions_allowed = array('jpg', 'jpeg', 'gif', 'png');
                if (in_array($extension_upload, $extensions_allowed))
                {
                    move_uploaded_file($_FILES['playlistImage']['tmp_name'], 'uploads/' . basename($_FILES['playlistImage']['name']));

                    //create new instance of Playlist
                    if (!empty($_POST['playlistTitle'])) {
                        $playlist = new Playlist(["playlist_title" => $_POST['playlistTitle'],
                                                "user_id" => (int)$_SESSION['userId'],
                                                "playlist_image" => $_POST['playlistImage']]);
                        $PlaylistsManager->create($playlist);
                        echo "new object playlist has been created!";
                }
        }
    }
}