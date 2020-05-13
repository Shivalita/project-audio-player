//on va chercher les data en json et on les convertit au bon format
const myHeaders = {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "7999759ba1mshe55b700cd61c3dcp1ec0a8jsn4a75ff295f89"
};

const myInit = { method: 'GET',
                headers: myHeaders};

async function getArtist(url, init) {
    const response = await fetch(url, init);
    const result = await response.json();
    result.data.map(function(element) {
        const artist = new FormData;
        artist.append('name', element.artist.name);
        const request = new XMLHttpRequest();
        request.open("POST", "./apps/add-audio.php?artist");
        request.send(artist);
        console.log(artist);
    })
}//trop de requête ajax pas opti
//on n'arrive pas sur la bonne page en tapant l'url, donc on ne voit pas le POST
//simplifier la requête et eventuellement la peaufiner vendredi

getArtist("https://deezerdevs-deezer.p.rapidapi.com/search?q=linkin%20park", myInit);



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