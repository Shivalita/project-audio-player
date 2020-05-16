let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', getSearch);

async function displayResults(myResult) {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = myResult;
}

//await sert quand js ne peut pas savoir cmb de tmp ça va prendre, quand c'est pas dépendant de lui
//map: pour chaque elem de mon array, je veux tel result; il créé et renvoie un array
//forEach pas adapté, il ne créé et ne renvoie rien, il permet juste l'execution d'un fonction
async function getResults(url, method, body) {
    console.log('func get results se lance');
    let response = await fetch(url, method, body);
    console.log('response: ',  response);
    let results = await response.json();
    console.log('results: ',  results);
    console.log('results name: ',  results.name);
    let myContent = results.name.map(function(element) {
        return `
            <li>${element.name}</li>
        `
    }).join('');
    console.log('myContent: ',  myContent);
    return myContent;
}

async function getSearch(event) {
    console.log('la recherche commence');
    event.preventDefault();

    const data = new FormData;
    data.append('search', search.value);
    console.log('search value :', search.value);
    console.log('form data :', data);

    let myResult = await getResults('./apps/getSearchResults.php', {
        method: 'POST',
        body: data});
    displayResults(myResult);

    search.value = '';
}




