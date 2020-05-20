<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

/* Get all user's comments */
$myCommentsQuery = $database->prepare('SELECT * from comments WHERE user_id = ? ORDER BY comments.created_at DESC');
$myCommentsQuery->execute([$_SESSION['userId']]);
$myComments = $myCommentsQuery->fetchAll(PDO::FETCH_ASSOC);

$myCommentsCount = count($myComments);

if ($myCommentsCount === 0) {
    echo ('
        <div class="row justify-content-around text-center mt-4">
            <div id="noComment" class="col-12 mb-5">
                <h2 class="my-5"><b class="text-white">You haven\'t posted any comments yet<b></h2>
                <h4 class="text-white my-4">Write a comment on the songs you like to share your thoughts with the world.</h4>
            </div>
        </div>
    ');
} else {
    echo ('

            <div class="row text-center text-white mb-5">
                <div class="col-12">
                    <h2><b class="text-white">My comments</b></h2>
                    <h5 class="mt-3 mb-1">'.$myCommentsCount.' comments</h5>
                </div>
                
            </div>
            <div id="myComments" class="row justify-content-around">
        ');
        foreach ($myComments as $myComment) {
            /* Get commented songs titles */
            $myCommentedSongQuery = $database->prepare('SELECT * from songs WHERE id = ?');
            $myCommentedSongQuery->execute([$myComment['song_id']]);
            $myCommentedSong = $myCommentedSongQuery->fetch(PDO::FETCH_ASSOC);

            /* Get commented songs artists */
            $myCommentedArtistQuery = $database->prepare('SELECT * from artists WHERE id = ?');
            $myCommentedArtistQuery->execute([$myCommentedSong['artist_id']]);
            $myCommentedArtist = $myCommentedArtistQuery->fetch(PDO::FETCH_ASSOC);

            echo ('<div class="col-10 text-white mb-4 myComment">');
            echo ($myComment['created_at'].'</br>');
            echo ('<b class="name">'.$myCommentedArtist['name'].' - '.$myCommentedSong['title'].'</b> : '.$myComment['comment'].'<br>');
            echo ('</div>');
    }
    echo ('
            </div>
    ');
}