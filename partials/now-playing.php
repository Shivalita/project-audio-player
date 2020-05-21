<?php
    include_once '../partials/start-session.php';

    // echo $_SESSION['songId'];

    // if (isset($_SESSION['songId'])) {
        // include_once "../apps/now-playing-display.php";
        echo ('
        <div class="container justify-content-around">
            <div class="row text-center">
                <div class="col-6 px-2 cover">
                    <div class="col-12 mt-5 align-items-center">
                            <img id="albumImg" class="img-fluid control" src="" alt="">
                    </div>
                    <div class="col-12">
                    ');
                    include_once '../partials/add-playlist-btn.php';
                    echo ('
                    </div>
                </div>

                <div id="tracklist" class="col-6 px-2 mt-3">
                    <div class="col-12 mb-5">
                        <h5 id="albumTitle" class="text-white"></h5>
                    </div>
                    <div class="row">

                        <div class="col-6">
                            <div id="albumSongLeft" class="col-12"> 
                            </div>                                      
                        </div>
                                
                        <div class="col-6">
                            <div id="albumSongRight" class="col-12 my-2">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        ');
    // } else {
    //     echo ('
    //     <div class="container">
    //         <div class="row justify-content-around">
    //             <div id="playSongInvitation" class="text-center">
    //                 <h2 class="my-5"><b class="text-white">Play a song to enjoy the best of music<b></h2>
    //                 <h4 class="text-white mt-4">Search for your favorite songs, albums or artists</h4>
    //                 <h4 class="text-white mt-3">You can also listen to a playlist that suits your mood</h4>
    //             </div> 
    //         </div>   
    //     </div> 
    //     ');
    // }
?>