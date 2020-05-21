<?php

include_once '../partials/connection.php';
include_once '../partials/start-session.php';

//check playlist's image
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

                    //create new playlist in our db
                    if (!empty($_POST['playlistTitle'])) {
                        $userId = (int)$_SESSION['userId'];
                        $playlistTitle = $_POST['playlistTitle'];
                        $playlistImage = $_POST['playlistImage'];
                       
                    
                        $req = $database->prepare('INSERT INTO playlists(playlist_title, user_id, playlist_image)
                        VALUES(:playlist_title, :user_id, :playlist_image)');
                    
                        $req->execute(array(
                            'playlist_title' => $playlistTitle,
                            'user_id' => $userId,
                            'playlist_image' => $playlist_image
                        ));
                    
                        header('Location: ../index.php');
                    }
                }
        }
}

