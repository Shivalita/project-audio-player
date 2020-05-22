<?php
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
?>