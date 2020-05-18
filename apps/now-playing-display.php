<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

if (isset($_SESSION['songId'])) {
    $songId = $_SESSION['songId'];

    /* Get song's title */
    $songQuery = $database->prepare('SELECT * FROM songs WHERE id = ?');
    $songQuery->execute([$songId]);
    $song = $songQuery->fetch(PDO::FETCH_ASSOC);

    $songTitle = $song['title'];


    /* Get song's artist name */
    $songArtistId = $song['artist_id'];

    $artistQuery = $database->prepare('SELECT * FROM artists WHERE id = ?');
    $artistQuery->execute([$songArtistId]);
    $artist = $artistQuery->fetch(PDO::FETCH_ASSOC);

    $artistName = $artist['name'];


    /* Get album's cover and title*/
    $songAlbumId = $song['album_id'];

    $albumQuery = $database->prepare('SELECT * FROM albums WHERE id = ?');
    $albumQuery->execute([$songAlbumId]);
    $album = $albumQuery->fetch(PDO::FETCH_ASSOC);

    $albumImg = $album['album_image'];
    $albumTitle = $album['album_title'];


    /* Display song's data */
?>
    <div class="container justify-content-around">
        <div class="row text-center">
            <div class="col-6 px-2 songColumn">
                <div class="col-12 mt-5 align-items-center">
                        <img id="albumImg" class="img-fluid control" src="<?=$albumImg?>" alt="">
                </div>
                <div class="col-12">
                    <?php include_once '../partials/add-playlist-btn.php'; ?>
                </div>
            </div>

            <div class="col-6 px-2 songColumn">
                <div id="SongsList" class="col-12 mt-5">
                    <?php 
                    echo ('<h5 class="text-white mt-5 mb-4">'.$albumTitle.'</h5>');
                    ?>
                </div>
                <div class="row">
                    <div class="col-6">
                        <?php
                        /* Get all album's songs and display the first half of them */
                        $albumSongsQuery = $database->prepare('SELECT * FROM songs WHERE album_id = ?');
                        $albumSongsQuery->execute([$songAlbumId]);
                        $albumSongs = $albumSongsQuery->fetchAll(PDO::FETCH_ASSOC);

                        $midNumber = ceil(count($albumSongs)/2);

                        for ($i = 0; $i < $midNumber; $i++) { 
                            echo ('
                                <div class="col-12 my-2">
                                    <p class="text-white control albumSong">
                            ');
                            echo ($albumSongs[$i]['title']);
                            echo ('
                                    </p>
                                </div>
                            ');
                        }
                        ?>
                    </div>
                            
                    <div class="col-6">
                        <?php
                        /* Display the second half of album's songs */
                        for ($i = $midNumber; $i < count($albumSongs); $i++) { 
                            echo ('
                                <div class="col-12 my-2">
                                    <p class="text-white control albumSong">
                            ');
                                echo ($albumSongs[$i]['title']);
                            echo ('
                                    </p>
                                </div>
                            ');
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php 
}
?>