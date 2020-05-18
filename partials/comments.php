<?php
    include_once '../partials/start-session.php';

    echo ('<div class="container">');
        echo ('<div class="row justify-content-around">');
            if (isset($_SESSION['songId'])) {
                echo ('<div class="row justify-content-center mt-5">');
                    include_once "../apps/comments-display.php";
                echo ('</div>');
            } else {
                echo ('
                    <div id="playSongInvitation" class="row justify-content-center text-center">
                        <div class="col-12">
                            <h2 class="my-5"><b class="text-white">Play a song to see comments from other music lovers<b></h2>
                            <h4 class="mt-4 text-white">Share your own thoughts and feelings about your favourite songs</h4>
                            <h4 class="mt-3 text-white">We all have something to say about the tunes that thrill us</h4>
                            <h4 class="mt-3 text-white">Give your personal opinion about the music you like</h4>
                        </div>
                    </div> 
                ');
            }
        echo ('</div>');
    echo ('</div>');
?>
