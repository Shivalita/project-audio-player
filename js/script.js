const html = document.querySelector('html');
const button = document.querySelector('#arrow');
const spanBtn = document.querySelector('#spanAppearBtn');
const aside = document.querySelector('#side');
const main = document.querySelector('#main');

/*animation pour faire apparaître et disparaître aside onclick*/
html.addEventListener('click', function(event) {
    if (window.matchMedia("(max-width:768px)").matches) {
       if (event.target === button) {
           spanBtn.classList.remove('d-block', 'd-sm-block');
           spanBtn.classList.add('d-none');
           aside.classList.remove('d-none');
           aside.classList.add('d-block', 'animationAppear');
           main.classList.remove('col-12');
           main.classList.add('col-10')
       } else {
           spanBtn.classList.remove('d-none');
           spanBtn.classList.add('d-block', 'd-sm-block');
           aside.classList.remove('animationAppear', 'd-block');
           aside.classList.add('d-none');
           main.classList.remove('col-10');
           main.classList.add('col-12')
       }
   }
})


/* Tab system */
let tabs = document.querySelectorAll('.tab');
let songTitleDiv = document.querySelector('#playerTitleArtist');

/* get php partial to be displayed in content */
async function getPartial(url) {
    let response =  await fetch(url);
    let result = await response.text();
    return result;
}

function displayPartial(partial) {
    document.querySelector('#content').innerHTML = partial;
}

function setSong(songLink) {
    player.src = songLink;
    player.play();
}

function refreshSongDisplay(newSongData) {
    songTitleDiv.innerHTML = newSongData;
}

/* Check if tab button is clicked , get tab's partial and display it*/
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', async function(event) {
        if (event.target.innerHTML === 'Now playing') {
            let partial = await getPartial('./partials/now-playing.php');
            displayPartial(partial);
            
            /* Get song when clicked in album's list, and set player's src */
            let albumSongs = document.querySelectorAll('.albumSong');
            for (let j = 0; j < albumSongs.length; j++) {
                albumSongs[j].addEventListener('click', async function() {
                    let songName = albumSongs[j].innerText;
                    let songFormData = new FormData;
                    songFormData.append('songName', songName); 

                    let getSongLink = await fetch('./apps/get-song.php', {
                        method: 'POST',
                        body: songFormData
                })
                    let songLink = await getSongLink.text();
                    setSong(songLink);

                    /* Refresh song's display - DON'T WORK, DIDN'T HAVE TIME TO DEBUG */ 
                    let refreshSong = await fetch('./apps/now-playing-display.php');
                    let newSongData = await refreshSong.text();
                    refreshSongDisplay(newSongData);
                    
                })    
            }
        } else if (event.target.innerHTML == 'Comments') {
            let partial = await getPartial('./partials/comments.php');
            displayPartial(partial);
        } else if (event.target.innerHTML === 'Popular playlists') {
            let partial = await getPartial('./partials/coming-soon.php');
            displayPartial(partial);
        } else if (event.target.innerHTML === 'New releases') {
            let partial = await getPartial('./partials/coming-soon.php');
            displayPartial(partial);
        } 
    })     
}