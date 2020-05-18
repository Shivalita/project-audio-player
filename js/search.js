let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', getSearch);

async function displayResults(myResult) {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = myResult;
}

async function getResults(url, method, body) {
    let response = await fetch(url, method, body);
    let results = await response.json();
    let myContent = [results.name, results.album_title, results.title, results.playlist_title];
    let onTest = myContent.map(function(element) {
        element.map(function(item) {
            if(item.name !== undefined) {
                return `
            <li>${item.name}</li>
            `
            }
            if(item.album_title !== undefined) {
                return `
            <li>${item.album_title}</li>
            `
            }
            if(item.title !== undefined) {
                return `
            <li>${item.title}</li>
            `
            }
            if(item.playlist_title !== undefined) {
                return `
            <li>${item.playlist_title}</li>
            `
            }
        })
    })
    return onTest;
}

async function getSearch(event) {
    event.preventDefault();

    const data = new FormData;
    data.append('search', search.value);

    let myResult = await getResults('./apps/getSearchResults.php', {
        method: 'POST',
        body: data});
    displayResults(myResult);

    search.value = '';
}