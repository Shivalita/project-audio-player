
<div id="playerContainer">
    <?php include_once './partials/add-playlist-btn.php';?> 
    
    <input type="range" id="volumeController" value="5" min="0" max="10"/>

    <button class="control" onclick="play('audioPlayer', this)">Play</button>
    <button class="control" onclick="mute('audioPlayer')">Mute</button>
    <button class="control" onclick="loop('audioPlayer')">Loop</button>

    <audio id="audioPlayer" ontimeupdate="update(this)" preload="auto">
        <source src="https://cdns-preview-1.dzcdn.net/stream/c-179888dacdd6a28871ead1caebf86c79-3.mp3">
    </audio>

    <div>
        <div id="progressBarControl" class="progress" onclick="clickProgress('audioPlayer', this, event)">
            <div id="progressBar" class="progress-bar progress-bar-striped progress-bar-animated"></div>
        </div>
    </div>

    <span id="progressTime">00:00</span>
    <span id="durationTime">00:00</span>
</div>


