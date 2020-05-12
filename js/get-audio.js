//erreur : result.map is not a function
const myHeaders = {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "7999759ba1mshe55b700cd61c3dcp1ec0a8jsn4a75ff295f89"
};

const myInit = { method: 'GET',
                headers: myHeaders};

async function getAudio(url, init) {
    const response = await fetch(url, init);
    const result = await response.json();
    const html = result.map(function(song) {
        return `
            <div>
                <span>${song.title_short} </span>
                <span>par ${song.artist.name} </span>
                <span>de l'album ${song.album.name}</span>
            </div>
        `
    }).join('');
    
    const content = document.querySelector('#main');
    content.innerHTML = html;
}

getAudio("https://deezerdevs-deezer.p.rapidapi.com/search?q=linkin%20park", myInit);

//la fonction donnée par l'API et retouchée par moi a un elem qui n'est pas défini, mais lequel?
// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=linkin%20park", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "7999759ba1mshe55b700cd61c3dcp1ec0a8jsn4a75ff295f89"
// 	}
// })
// .then(response => {
//     const result = response.json();
//     console.log(result);
//     })
//     const bla = result.map(function(data) {
//         return `
//             <div>
//                 <span>${data.title_short} </span>
//                 <span>par ${data.artist.name} </span>
//                 <span>de l'album ${data.album.name}</span>
//             </div>
//         `
//     }).join('');

//     const content = document.querySelector('#main');
//     content.innerHTML = bla;


//bon la méthode XML ça marche mais ça me retourne un bloc de texte indigeste
// var data = null; //et à quoi ça sert ce machin si c'est nul??

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		const content = document.querySelector('#main');
//         content.innerHTML = this.responseText;
// 	}
// });

// xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=linkin%20park");
// xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "7999759ba1mshe55b700cd61c3dcp1ec0a8jsn4a75ff295f89");

// xhr.send(data);

// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=linkin%20park", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "7999759ba1mshe55b700cd61c3dcp1ec0a8jsn4a75ff295f89"
// 	}
// })
// .then(response => response.json())
// .then(data => {
//     for (const song of data.songs) { //fu
//         const content = document.querySelector('#main');
//         const listItem = document.createElement('li');
//         content.listItem.textContent = songs.title;
//     }
// });