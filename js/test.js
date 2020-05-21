let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', getSearch);

async function getSearch(event) {
    console.log("getSearch se lance");
    event.preventDefault();

    let searchRequest = search.value;

    await getSearchResults(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchRequest}`, myInit);
    console.log("getSearchResults est terminée");

    search.value = '';
}

const myHeaders = {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "3c7ba1a799msh39d4063292763d0p17e532jsn54f102579552"
};

const myInit = { method: 'GET',
                headers: myHeaders};

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
        <div class="row" style="min-height: 50%;">
            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-2 text-left text-white">Artists</h5>
                <ul id="ulArtists" class="pb-2 my-auto"></ul>
            </div>

            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-2  text-left text-white">Albums</h5>
                <ul id="ulAlbums" class="pb-2 my-auto"></ul>
            </div>
        </div>

        <div class="row" style="min-height: 50%;">
            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-2  text-left text-white">Songs</h5>
                <ul id="ulSongs" class="pb-2 my-auto"></ul>
            </div>
        </div>
    </div>
    `;
    result.map(function(item) {
        artistsTable.push(`<li>${item.artist.name}</li>`);
        const ulArtists = document.querySelector('#ulArtists');
        ulArtists.innerHTML = artistsTable.map(function(artist) {
            return artist;
        }).join("");
        albumsTable.push(`<li>${item.album.title}</li>`);
        const ulAlbums = document.querySelector('#ulAlbums');
        ulAlbums.innerHTML = albumsTable.map(function(album) {
            return album;
        }).join("");
        songsTable.push(`<li>${item.title_short}</li>`);
        const ulSongs = document.querySelector('#ulSongs');
        ulSongs.innerHTML = songsTable.map(function(song) {
            return song;
        }).join("");
    })
}

// console.log(result[i].artist.name);
// console.log(result[i].title_short);
// console.log(result[i].preview);
// console.log(result[i].album.title);
// console.log(result[i].album.cover); 