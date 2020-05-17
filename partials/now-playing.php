<?php
    include_once '../partials/start-session.php';

    if (isset($_SESSION['songId'])) {
        include_once "../apps/now-playing-display.php";
    } else {
        echo ('
        <div class="container">
            <div class="row justify-content-around">
                <div id="playSongInvitation" class="text-center">
                    <h2 class="my-5"><b class="text-white">Play a song to enjoy the best of music<b></h2>
                    <h4 class="text-white mt-4">Search for your favorite songs, albums or artists</h4>
                    <h4 class="text-white mt-3">You can also listen to a playlist that suits your mood</h4>
                </div> 
            </div>   
        </div> 
        ');
    }
?>