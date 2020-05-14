//on va chercher les data en json et on les convertit au bon format
const myHeaders = {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "7999759ba1mshe55b700cd61c3dcp1ec0a8jsn4a75ff295f89"
};

const myInit = { method: 'GET',
                headers: myHeaders};

async function getArtist(url, init) {
    const response = await fetch(url, init);
    const results = await response.json();
    const result = results.data;
    for (let i = 0; i < result.length; i++) {
        const artist = new FormData;
        artist.append('artistName', result[i].artist.name);
        artist.append('title', result[i].title_short);
        artist.append('link', result[i].preview);
        artist.append('albumTitle', result[i].album.title);
        artist.append('albumCover', result[i].album.cover);
        const request = new XMLHttpRequest();
        request.open("POST", "./apps/add-audio.php");
        request.send(artist);        
    }
}//trop de requête ajax pas opti
//on n'arrive pas sur la bonne page en tapant l'url, donc on ne voit pas le POST
//simplifier la requête et eventuellement la peaufiner vendredi

getArtist("https://deezerdevs-deezer.p.rapidapi.com/search?q=disturbed", myInit);



// fetch('./apps/add-audio.php?artist', {
//     method: 'POST',
//     body: 'name'
// })

// const artist = new FormData;
//         artist.append('name', element.artist.name);
//         const request = new XMLHttpRequest();
//         request.open("POST", "./apps/add-audio.php?artist");
//         request.send(artist);
//         console.log(artist)