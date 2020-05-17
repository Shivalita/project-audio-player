<?php
    include_once '../partials/start-session.php';

    if (isset($_SESSION['songId'])) {
        include_once "../apps/comments-display.php";
    } else {
        echo ('
            <div id="playSongInvitation" class="text-center">
                <h2 class="my-5"><b>Play a song to see comments from other music lovers<b></h2>
                <h4 class="mt-4">Share your own thoughts and feelings about your favourite songs</h4>
                <h4 class="mt-3">We all have something to say about the tunes that thrill us</h4>
                <h4 class="mt-3">Give your personal opinion about the music you like</h4>
            </div> 
        ');
    }
?>
