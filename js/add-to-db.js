//on va chercher les data en json et on les convertit au bon format
const myHeaders = {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "3c7ba1a799msh39d4063292763d0p17e532jsn54f102579552"
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
}

getArtist("https://deezerdevs-deezer.p.rapidapi.com/search?q=system of a down", myInit);