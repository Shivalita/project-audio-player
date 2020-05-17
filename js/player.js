//select our player in DOM
let player = document.querySelector('#audioPlayer');
//declare our empty array for playlists to come
let currentPlaylist = [];
// Current index of the files array
let i = 0;

let nextSrc = "";
let prevSrc = "";

// Listen for the music ended event, to play the next audio file
player.addEventListener('ended', next, false);
player.addEventListener('ended', searchNext(nextSrc));
player.addEventListener('ended', searchPrev(prevSrc));

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

/* Function Fisher-Yates to shuffle an array */
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

/* Random button*/
async function random(url) {
    //if currentPlaylist array is empty, fetch random songs and put them inside
    if(currentPlaylist.length === 0) {
        const response = await fetch(url);
        const results = await response.json();
        results.map(function(data) {
            currentPlaylist.push(data);
        });
        currentPlaylist = shuffle(currentPlaylist);
        player.src = currentPlaylist[0].link;       
        //if currentPlaylist array is full, empty it
    } else {
        currentPlaylist = [];
    }    
}

/////////////////////////////////////////////////////////
let imgCoverPrev = document.querySelector('#imgCoverPrev');
let artistTitlePrev = document.querySelector('#artistTitlePrev');
let imgCoverNext = document.querySelector('#imgCoverNext');
let artistTitleNext = document.querySelector('#artistTitleNext');

async function injectNextPrev(goNext, goPrev) {
    console.log('injectNextPrev se lance');
    //check if current playlist is not empty
        if(currentPlaylist.length !== 0) {
            console.log('playlist not empty');
    //check if current song is not the first song, then prev
        if (i !== 0) {
            console.log('not the first song');
            imgCoverPrev.src = prevSrc;
            artistTitlePrev.innerHTML = `<h5>${goPrev.title} - ${goPrev.name}</h5>`;
            console.log('title and name: ', goPrev.title, goPrev.name);
        }
    //check if current song is not the last song, then next
        if (i !== currentPlaylist.length - 1) {
            console.log('not the last song');
            console.log('lien de la next cover: ', nextSrc);
            console.log('goNext', goNext);
            console.log('goNext.title', goNext.title);
                imgCoverNext.src = nextSrc;
                artistTitleNext.innerHTML = `<h5>${goNext.title} - ${goNext.name}</h5>`;
        }
    }
}

async function getNext(url, method, body) {
    console.log('get next se lance');
    let response = await fetch(url, method, body);
    console.log('response: ', response);
    let results = await response.json();
    console.log('results: ', results);
    return results;
}

async function searchNext(nextSrc) {
    console.log('searchNext se lance');
    console.log('currentPlaylist.length: ', currentPlaylist.length);
    //check if current playlist is not empty
    if(currentPlaylist.length !== 0) {
    //check if current song is not the last song
        if (i !== currentPlaylist.length - 1) {
        nextSrc = currentPlaylist[i+1].link;
        console.log('nextSrc: ', nextSrc);

        let data = new FormData;
        data.append('nextLink', nextSrc);
        console.log('form data :', data);

        let myNext = await getNext('./apps/getPrevAndNext.php', {
            method: 'POST',
            body: data});
        console.log('myNext', myNext);
        return myNext;
        }
    }
    
}

async function getPrev(url, method, body) {
    console.log('get prev se lance');
    let response = await fetch(url, method, body);
    console.log('response: ', response);
    let results = await response.json();
    console.log('results: ', results);
    return results;
}

async function searchPrev(prevSrc) {
    console.log('searchPrev se lance');
    console.log('currentPlaylist.length: ', currentPlaylist.length);
    //check if current playlist is not empty
    if(currentPlaylist.length !== 0) {
    //check if current song is not the first song
        if (i !== 0) {
        prevSrc = currentPlaylist[i-1].link;
        console.log('prevSrc: ', prevSrc);

        let data = new FormData;
        data.append('prevLink', prevSrc);
        console.log('form data :', data);

        let myPrev = await getPrev('./apps/getPrevAndNext.php', {
            method: 'POST',
            body: data});
        console.log('myPrev', myPrev);
        return myPrev;
        }
    }
}

async function connard() {
    console.log('connard se lance');
    await random('./apps/get-playlists.php?random');
    console.log('random est finie');
    let goNext = await searchNext(nextSrc);
    let goPrev = await searchPrev(prevSrc);
    await injectNextPrev(goNext, goPrev);
}
////////////////////////////////////////////////////////////////

// function for moving to next audio file
function next() {
    // Check for last audio file in the playlist
    if (i === currentPlaylist.length - 1) {
        i = 0;
    } else {
        i++;
    }
    // Change the audio element source
    stop();
    player.src = currentPlaylist[i].link;
    player.play();
}

function prev() {
    // Check for last audio file in the playlist
    if (i === 0) {
        i = currentPlaylist.length - 1;
    } else {
        i--;
    }
    // Change the audio element source
    stop();
    player.src = currentPlaylist[i].link;
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

/* Make progress bar clickable */
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
player.addEventListener('playing', async function(event) {
    /* Store song's source */
    let currentSong = event.originalTarget.src;
    let formData = new FormData;
    formData.append('link', currentSong); 

    /* Send song's source to php for processing (get artist and title) and display it */
    let songTitleDiv = document.querySelector('#playerTitleArtist');
    let response = await fetch('./apps/get-song-data.php', {
        method: 'POST',
        body: formData
    })
    let songDisplay = await response.text();
    songTitleDiv.innerHTML = songDisplay;
})