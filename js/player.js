
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

/* Volume controller */
let volumeController = document.querySelector('#volumeController');
let player = document.querySelector('#audioPlayer');

volumeController.oninput = function() {
    let volume = (volumeController.value / 10);
    player.volume = volume;	
}

/* Progression bar */
function update(player) {
    let duration = player.duration;    // Durée totale
    let time     = player.currentTime; // Temps écoulé
    let fraction = time / duration;
    let percent  = Math.ceil(fraction * 100);

    let progress = document.querySelector('#progressBar');
	
    progress.style.width = percent + '%';
    progress.textContent = percent + '%';

    document.querySelector('#progressTime').textContent = formatTime(time);
    document.querySelector('#durationTime').textContent = formatTime(duration);
}

/* Display current time*/
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
    var top = 0, left = 0;
    
    do {
        top  += element.offsetTop;
        left += element.offsetLeft;
    } while (element = element.offsetParent);
    
    return { x: left, y: top };
}

/*  */
function clickProgress(idPlayer, control, event) {
    var parent = getPosition(control);    // La position absolue de la progressBar
    var target = getMousePosition(event); // L'endroit de la progressBar où on a cliqué
    var player = document.querySelector('#' + idPlayer);
  
    var x = target.x - parent.x; 
    var wrapperWidth = document.querySelector('#progressBarControl').offsetWidth;
    
    var percent = Math.ceil((x / wrapperWidth) * 100);    
    var duration = player.duration;
    
    player.currentTime = (duration * percent) / 100;
}


let contentDiv = document.querySelector('#content');
let partial;

/* get php partial to display in content */
async function getPartial(url) {
    console.log('before fetch')
    let toto =  await fetch(url)

    let response = await toto.text();
    storePartial(response);
    console.warn(response)
}

function storePartial(partialData) {
    partial = partialData;
    console.log('partial 1 = ' + partial);
}

/* Check if hash changes in url */
window.addEventListener('hashchange', async function() {
    if (window.location.hash === '#test') {
        await getPartial('./partials/comment-form.php');
        console.log('partial 2 = ' + partial);
        contentDiv.innerHTML = partial;
    }
})


audioPlayer.addEventListener('playing', (event => {
    console.log('player on');
    let currentSong = event.originalTarget.currentSrc;
    fetch('./apps/song-id.php', {
        method: 'POST',
        body: currentSong.text
    })
    .then(response => {
        if(response.ok) {
            return response.text();
        } else {
            console.log('response error');
        }
    })
})
)
