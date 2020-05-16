let player = document.querySelector('#audioPlayer');
// Listen for the music ended event, to play the next audio file
player.addEventListener('ended', next, false);

//stop function
function stop() {
    player.currentTime=0;
    player.pause();
    
}

/* Play/Pause button */
function play(idPlayer, control) {
    let player = document.querySelector('#' + idPlayer);
    
         if (player.paused) {
            player.play();
            control.textContent = 'Pause';
        } else {
            player.pause();	
            control.textContent = 'Play';
        }     
}

 


/* Mute button */
function mute(idPlayer) {
    let player = document.querySelector('#' + idPlayer);

    if (player.muted) {
        player.muted = false;
    } else {
        player.muted = true;
    }
}

/* Loop button */
function loop(idPlayer) {
    let player = document.querySelector('#' + idPlayer);

    if (player.loop) {
        player.loop = false;
    } else {
        player.loop = true;
    }
}

/* Random button*/
let randoms = [];
console.log(randoms);

async function random(url) {
    //if randoms array is empty, fetch random songs and put them inside
    if(randoms.length === 0) {
        const response = await fetch(url);
        const results = await response.json();
        results.map(function(data) {
            randoms.push(data);
        });player.src = randoms[0].link;
        //if randoms array is full, empty it
    } else {
        randoms = [];
    }    
}

// Current index of the files array
let i = 0;

// function for moving to next audio file
function next() {
    // Check for last audio file in the playlist
    if (i === randoms.length - 1) {
        i = 0;
    } else {
        i++;
    }
    // Change the audio element source
    stop();
    player.src = randoms[i].link;
    player.play();
}

function prev() {
    // Check for last audio file in the playlist
    if (i === 0) {
        i = randoms.length - 1;
    } else {
        i--;
    }
    // Change the audio element source
    stop();
    player.src = randoms[i].link;
    player.play();
}


/* Volume controller */
let volumeController = document.querySelector('#volumeController');

volumeController.oninput = function() {
    let volume = (volumeController.value / 10);
    player.volume = volume;	
}

/* Progression bar */
function update(player) {
    let duration = player.duration;    // Durée totale
    let time     = player.currentTime; // Temps écoulé
    if(Number.isNaN(duration) || Number.isNaN(time)) {
        duration = 0;
        time = 0;
    } else {
        let fraction = time / duration;
        let percent  = Math.ceil(fraction * 100);

        let progress = document.querySelector('#progressBar');
        
        progress.style.width = percent + '%';
        progress.textContent = percent + '%';

        document.querySelector('#progressTime').textContent = formatTime(time);
        document.querySelector('#durationTime').textContent = formatTime(duration);
    }
    
}

/* Display current time */
function formatTime(time) {
    let mins  = Math.floor((time % 3600) / 60);
    let secs  = Math.floor(time % 60);
	
    if (secs < 10) {
        secs = "0" + secs;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }
		
    return mins + ":" + secs; // mm:ss
}

/* Click on progress bar to move forward or backward */
function getMousePosition(event) {
    return {
        x: event.pageX,
        y: event.pageY
    };
}

/* Calculate distance between child and parent, and returns top and left values */
function getPosition(element){
    let top = 0, left = 0;
    
    do {
        top  += element.offsetTop;
        left += element.offsetLeft;
    } while (element = element.offsetParent);
    
    return { x: left, y: top };
}

/*  */
function clickProgress(idPlayer, control, event) {
    let parent = getPosition(control);    // La position absolue de la progressBar
    let target = getMousePosition(event); // L'endroit de la progressBar où on a cliqué
    let player = document.querySelector('#' + idPlayer);
  
    let x = target.x - parent.x; 
    let wrapperWidth = document.querySelector('#progressBarControl').offsetWidth;
    
    let percent = Math.ceil((x / wrapperWidth) * 100);    
    let duration = player.duration;
    
    player.currentTime = (duration * percent) / 100;
}


/* Check if player is playing a song */
player.addEventListener('playing', function(event) {
    /* Store song's source */
    let currentSong = event.originalTarget.src;
    let formData = new FormData;
    formData.append('link', currentSong); 

    /* Send song's source to php for processing (get id)  */
    fetch('./apps/song-id.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(response.ok) {
            return response.link;
        } else {
            console.log('response error');
        }
    })
    .catch(error => {
        console.log(error);
    })
})
