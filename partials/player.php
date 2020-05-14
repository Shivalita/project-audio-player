
<div id="playerContainer">
    <?php include_once './partials/add-playlist-btn.php';?> 
    
    <input type="range" id="volumeController" value="5" min="0" max="10"/>

    <button class="control" onclick="play('audioPlayer', this)">Play</button>
    <button class="control" onclick="prev('audioPlayer')">Prev</button>
    <button class="control" onclick="next('audioPlayer')">Next</button>
    <button class="control" onclick="mute('audioPlayer')">Mute</button>
    <button class="control" onclick="loop('audioPlayer')">Loop</button>
    <button class="control" onclick="random('./apps/random-songs.php')">Random</button>

    <audio id="audioPlayer" ontimeupdate="update(this)" preload="auto">
        
    </audio>

    <div>
        <div id="progressBarControl" class="progress" onclick="clickProgress('audioPlayer', this, event)">
            <div id="progressBar" class="progress-bar progress-bar-striped progress-bar-animated"></div>
        </div>
    </div>

    <span id="progressTime">00:00</span>
    <span id="durationTime">00:00</span>
</div>

