let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', getSearch);

let myArtists = [];
let myAlbums = [];
let mySongs = [];
let myPlaylists = [];


async function displayResults() {
    const contentDiv = document.querySelector('#content');
    let listArtists = myArtists.map(function(artist) {
        return `
        <li class="text-white">${artist}</li>
        `
        }).join("");
    let listAlbums = myAlbums.map(function(album) {
        return `
        <li class="text-white">${album}</li>
        `
        }).join("");
    let listSongs = mySongs.map(function(song) {
        return `
        <li class="text-white">${song}</li>
        `
        }).join("");
    let listPlaylists = myPlaylists.map(function(playlists) {
        return `
        <li class="text-white">${playlists}</li>
        `
        }).join("");
    contentDiv.innerHTML = `
    <div class="container-fluid">
        <div class="row" style="min-height: 50%;">
            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-2 text-left text-white">Artists</h5>
                <ul class="pb-2 my-auto">${listArtists}</ul>
            </div>

            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-2  text-left text-white">Albums</h5>
                <ul class="pb-2 my-auto">${listAlbums}</ul>
            </div>
        </div>

        <div class="row" style="min-height: 50%;">
            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-2  text-left text-white">Songs</h5>
                <ul class="pb-2 my-auto">${listSongs}</ul>
            </div>

            <div class="col-12 col-md-6 text-center">
                <h5 class="pt-2 text-left text-white">Playlists</h5>
                <ul class="pb-2 my-auto">${listPlaylists}</ul>
            </div>
        </div>
    </div>
    `;
}

async function getResults(url, method, body) {
    let response = await fetch(url, method, body);
    console.log("response: ", response);
    let results = await response.json();
    console.log("results name name: ", results.name[0].name);
    let myContent = [results.name, results.album_title, results.title, results.playlist_title];
    console.log("myContent: ", myContent);
    myContent.map(function(element) {
        console.log("element: ", element);
        element.map(function(item) {
            console.log("item: ", item);
            if(item.name !== undefined) {
                myArtists.push(item.name);
            }
            if(item.album_title !== undefined) {
                myAlbums.push(item.album_title);
            }
            if(item.title !== undefined) {
                mySongs.push(item.title);
            }
            if(item.playlist_title !== undefined) {
                myPlaylists.push(item.playlist_title);
            }
        })
    })
}

async function getSearch(event) {
    event.preventDefault();

    const data = new FormData;
    data.append('search', search.value);

    await getResults('./apps/getSearchResults.php', {
        method: 'POST',
        body: data});
    await displayResults();
    console.log("mySongs: ", mySongs);

    search.value = '';
}