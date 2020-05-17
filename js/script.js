const html = document.querySelector('html');
const button = document.querySelector('#appearBtn');
const spanBtn = document.querySelector('#spanAppearBtn');
const aside = document.querySelector('#side');
const main = document.querySelector('#main');

/*animation pour faire apparaître et disparaître aside onclick*/
html.addEventListener('click', function(event) {
    if (window.matchMedia("(max-width:768px)").matches) {
       if (event.target === button) {
           console.log("j'ai cliqué sur le bouton", event.target);
           spanBtn.classList.remove('d-block', 'd-sm-block');
           spanBtn.classList.add('d-none');
           aside.classList.remove('d-none');
           aside.classList.add('d-block', 'animationAppear');
           main.classList.remove('col-12');
           main.classList.add('col-10')
       } else {
           console.log('j\'ai cliqué sur autre chose', event.target);
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

/* get php partial to be displayed in content */
async function getPartial(url) {
    let response =  await fetch(url);
    let result = await response.text();
    return result;
}

function displayPartial(partial) {
    document.querySelector('#content').innerHTML = partial;
}

/* Check if tab button is clicked , get tab's partial and display it*/
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', async function(event) {
        if (event.target.innerHTML === 'Now playing') {
            let partial = await getPartial('./partials/now-playing.php');
            displayPartial(partial);
            let albumSongs = document.querySelectorAll('.albumSong');
            for (let j = 0; j < albumSongs.length; j++) {
                albumSongs[j].addEventListener('click', function() {
                    let songName = albumSongs[j].innerText.substring(4);
                    console.log(songName);
                        // let songPicked = await getSong('./apps/get-song.php');
                        // let songLink = await songPicked;
                    
                })     
            }
        } else if (event.target.innerHTML == 'Comments') {
            let partial = await getPartial('./partials/comments.php');
            displayPartial(partial)
        } else if (event.target.innerHTML === 'Popular playlists') {
            let partial = await getPartial('./partials/popular-playlists.php');
            displayPartial(partial);
        } else if (event.target.innerHTML === 'New releases') {
            let partial = await getPartial('./partials/new-releases.php');
            displayPartial(partial);
        } 
    })     
}


/* Get song picked and set new song's src */
// async function getPartial(url) {
//     let response =  await fetch(url);
//     let result = await response.text();
//     return result;
// }

// async function getAlbumSongs() {
//     let albumSongs = document.querySelectorAll('.albumSong');
//     albumSongs.forEach(song => {
//     console.log(song)
// });
// }



// for (let j = 0; j < albumSongs.length; j++) {
//     console.log(albumSongs[j])
//     albumSongs[j].addEventListener('click', function(event) {
//         console.log('ok')
//         console.log(event);
//             // let songPicked = await getSong('./apps/get-song.php');
//             // let songLink = await songPicked;
         
//     })     
// }