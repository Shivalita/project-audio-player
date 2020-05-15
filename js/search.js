let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', getSearch);

async function getResults(url, method, body) {
    console.log('func get results se lance');
    let response = await fetch(url, method, body);
    console.log('response: ',  response);
    let results = await response.json();
    console.log('results: ',  results);
    let myContent = results.name.forEach(element => {
        `
            <li>${element.name}</li>
        `
    });
    console.log('myContent: ',  myContent);
    return myContent;
}

function getSearch(event) {
    console.log('la recherche commence');
    event.preventDefault();

    const data = new FormData;
    data.append('search', search.value);
    console.log('search value :', search.value);
    console.log('form data :', data);

    getResults('./apps/getSearchResults.php', {
        method: 'POST',
        body: data}).then( function(myContent) {
            const content = document.querySelector('#content');
            content.innerHTML = myContent;
        });
    console.log('myContent :', myContent);
    search.value = '';
}




