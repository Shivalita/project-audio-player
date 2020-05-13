//on va chercher les data en json et on les convertit au bon format
const myHeaders = {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "7999759ba1mshe55b700cd61c3dcp1ec0a8jsn4a75ff295f89"
};

const myInit = { method: 'GET',
                headers: myHeaders};

async function getAudio(url, init) {
    const response = await fetch(url, init);
    const result = await response.json();
    const html = result.data.map(function(song) {
        return `
            <div>
                <span>${song.title_short} </span>
                <span>par ${song.artist.name} </span>
                <span>de l'album ${song.album.title}</span>
            </div>
        `
    }).join('');
    const content = document.querySelector('#main');
    content.insertAdjacentHTML('beforeend', html);
    console.log(content);
}

getAudio("https://deezerdevs-deezer.p.rapidapi.com/search?q=linkin%20park", myInit);