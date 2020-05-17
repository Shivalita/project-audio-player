let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', getSearch);

async function verif(verifArtist, verifAlbum, verifSong, verifPlaylist) {
    if(verifArtist) {
        let myArtist = results.name.map(function(element) {
            return `
                <li>${element.name}</li>
            `
        }).join('');
    } else {
        const divArtists = document.querySelector('#artists');
        divArtists.innerHTML = element.name
    };
    if(verifAlbum) {
        let myAlbum = results.album_title.map(function(element) {
            return `
                <li>${element.album_title}</li>
            `
        }).join('');
    } else {
        const divAlbums = document.querySelector('#albums');
        divAlbums.innerHTML = element.album_title
    };
    if(verifSong) {
        let mySong = results.title.map(function(element) {
            return `
                <li>${element.title}</li>
            `
        }).join('');
    } else {
        const divSongs = document.querySelector('#songs');
        divSongs.innerHTML = element.title
    };
    if(verifPlaylist) {
        let myPlaylist = results.playlist_title.map(function(element) {
            return `
                <li>${element.playlist_title}</li>
            `
        }).join('');
    } else {
        const divPlaylists = document.querySelector('#playlists');
        divPlaylists.innerHTML = playlist_title
    };
}

async function displayResults(myArtist, myAlbum, mySong, myPlaylist) {
    const divArtists = document.querySelector('#artists');
        divArtists.innerHTML = myArtist;
        const divAlbums = document.querySelector('#albums');
        divAlbums.innerHTML = myAlbum;
        const divSongs = document.querySelector('#songs');
        divSongs.innerHTML = mySong;
        const divPlaylists = document.querySelector('#playlists');
        divPlaylists.innerHTML = myPlaylist;
}

//await sert quand js ne peut pas savoir cmb de tmp ça va prendre, quand c'est pas dépendant de lui
//map: pour chaque elem de mon array, je veux tel result; il créé et renvoie un array
//forEach pas adapté, il ne créé et ne renvoie rien, il permet juste l'execution d'un fonction
async function getResults(url, method, body) {
    let response = await fetch(url, method, body);
    let results = await response.json();

    let verifArtist = Array.isArray(results.name);
    let verifAlbum = Array.isArray(results.album_title);
    let verifSong = Array.isArray(results.title);
    let verifPlaylist = Array.isArray(results.playlist_title);
    verif(verifArtist, results.name, verifAlbum, results.album_title, verifSong, results.title, verifPlaylist, results.playlist_title);
    displayResults(myArtist, myAlbum, mySong, myPlaylist);
}
//Impossible de map si le result est "No results found" car pas un array
async function getSearch(event) {
    event.preventDefault();

    const data = new FormData;
    data.append('search', search.value);

    let myResult = await getResults('./apps/getSearchResults.php', {
        method: 'POST',
        body: data});
    

    search.value = '';
}
