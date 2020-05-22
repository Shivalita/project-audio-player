//select the search form and apply event listener on submit
let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', getSearch);

//play when you click on song
function playNow(idPlayer, mySrc, idSong) {
    let player = document.querySelector('#' + idPlayer);
    player.src = mySrc;
    player.play();
    songId = idSong;        
}

//request Deezer APi with the search
async function getSearch(event) {
    console.log("getSearch se lance");
    event.preventDefault();

    let searchRequest = search.value;

    await getSearchResults(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchRequest}`, myInit);
    console.log("getSearchResults est terminée");

    search.value = '';
}

async function getSearchResults(url, init) {
    const response = await fetch(url, init);
    console.log("response", response);
    const results = await response.json();
    console.log("results", results);
    const result = results.data;
    console.log("result", result);
    let artistsTable = [];
    let albumsTable = [];
    let songsTable = [];
    const contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = `
    <div class="container-fluid">
        <div class="row align-items-start h-50">
            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-5 text-left text-white">Artists</h5>
                <ul id="ulArtists" class="pb-2 list-inline"></ul>
            </div>

            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-5  text-left text-white">Albums</h5>
                <ul id="ulAlbums" class="pb-2 list-inline"></ul>
            </div>
        </div>

        <div class="row align-items-start h-50">
            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-5  text-left text-white">Songs</h5>
                <ul id="ulSongs" class="pb-2 list-inline"></ul>
            </div>
        </div>
    </div>
    `;
    
    /* Store search results in arrays */
    result.map(function(item) {
        artistsTable.push(`<li class="list-inline-item">- ${item.artist.name}</li>`);
        albumsTable.push(`<li class="list-inline-item">- ${item.album.title}</li>`);  
        songsTable.push(`<li class="list-inline-item" onclick='playNow("audioPlayer", "${item.preview}", ${item.id})'>- ${item.title_short}</li>`);
        console.log(item.preview);
    })

    /* Remove duplicates in arrays */
    let removeArtistsDuplicates = new Set(artistsTable);
    artistsTable = [...removeArtistsDuplicates];

    let removeAlbumsDuplicates = new Set(albumsTable);
    albumsTable = [...removeAlbumsDuplicates];

    let removeSongsDuplicates = new Set(songsTable);
    songsTable = [...removeSongsDuplicates];

    /* Display results */
    const ulArtists = document.querySelector('#ulArtists');
    const ulAlbums = document.querySelector('#ulAlbums');
    const ulSongs = document.querySelector('#ulSongs');

    artistsTable.forEach(artistName => {
        ulArtists.innerHTML += artistName;
    });

    albumsTable.forEach(albumTitle => {
        ulAlbums.innerHTML += albumTitle;
    });

    songsTable.forEach(songTitle => {
        ulSongs.innerHTML += songTitle;
    });
}