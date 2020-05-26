
<div id="playerContainer d-flex">

    <div class="row justify-content-end text-center mr-1">
        <?php include_once './partials/add-playlist-btn.php';?>
    </div>
    
    <div class="d-flex row text-center" id="playerTitleArtist">
        <h5 class="text-white mb-4">Title - Artist</h5>
    </div>
    
    <div class="d-flex justify-content-around">
        <div>
            <button class="control" onclick="mute('audioPlayer')"><i class="fas fa-volume-mute"></i></button>
            <button class="control" onclick="loop('audioPlayer')"><i class="fas fa-undo"></i></button>
            <button class="control" onclick="letsRandom()"><i class="fas fa-random"></i></button>
        </div>
        
        <div>
            <button class="control" onclick="prev('audioPlayer')"><i class="fas fa-step-backward"></i></button>
            <button id="playBtn" class="control" onclick="play('audioPlayer', this)"><i class="fas fa-play"></i></button>
            <button class="control" onclick="next('audioPlayer')"><i class="fas fa-step-forward"></i></button>
        </div>
        
        <div>
            <input type="range" id="volumeController" value="5" min="0" max="10"/>
        </div>
    </div>
    
    

    <audio id="audioPlayer" ontimeupdate="update(this)" preload="auto"></audio>

    <div class="py-2">
        <div id="progressBarControl" class="progress" onclick="clickProgress('audioPlayer', this, event)">
            <div id="progressBar" class="progress-bar progress-bar-striped progress-bar-animated"></div>
        </div>
    </div>

    <div class="d-flex justify-content-between playerTime">
        <div id="progressTime">00:00</div>
        <div id="durationTime">00:00</div>
    </div>
    
</div>