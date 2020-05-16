<?php
    include_once '../partials/start-session.php';
    $_SESSION['songId'] = 20; // FOR TESTING - TO REMOVE

    if ($_SESSION['songId']) {
        echo ('
            <div class="container commentsContainer">
                <div class="row">
                    <div class="col-10 col-md-8 comment">
                        <?php include "./apps/commentsDisplay.php"; ?>
                    </div>
                </div>
            </div>
        ');

        if (!$_SESSION['nickname']) {
            echo ('
                <div id="signForComment" class="text-center">
                    <h2 class="my-5"><b>Join us to comment<b></h2>
                    <h4 class="mt-4">Sign up or log in to share about this song</h4>
                </div> 
            </div>
        ');
        } else {
            include_once 'comment-form.php';
        }

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
