let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', getSearch);

async function displayResults(myResult) {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = myResult;
}

//await sert quand js ne peut pas savoir cmb de tmp ça va prendre, quand c'est pas dépendant de lui
//map: pour chaque elem de mon array, je veux tel result; il créé et renvoie un array
//forEach pas adapté, il ne créé et ne renvoie rien, il permet juste l'execution d'un fonction
// async function getResults(url, method, body) {
//     console.log('func get results se lance');
//     let response = await fetch(url, method, body);
//     console.log('response: ',  response);
//     let results = await response.json();
//     console.log('results: ',  results);
//     console.log('results name: ',  results.name);
//     console.log('results album_title: ',  results.album_title);
//     let myContent = results.album_title.map(function(element) {
//         return `
//             <li>${element.album_title}</li>
//         `
//     }).join('');
//     console.log('myContent: ',  myContent);
//     return myContent;
// }
async function getResults(url, method, body) {
    let response = await fetch(url, method, body);
    let results = await response.json();
    let myContent = [results.name, results.album_title, results.title, results.playlist_title];
    console.log('myContent', myContent);
    let onTest = myContent.map(function(element) {
        element.map(function(item) {
            console.log('item: ', item);
            if(item.name !== undefined) {
                console.log('item.name: ', item.name);
                return `
            <li>${item.name}</li>
            `
            }
            if(item.album_title !== undefined) {
                console.log('item.album_title: ', item.album_title);
                return `
            <li>${item.album_title}</li>
            `
            }
            if(item.title !== undefined) {
                console.log('item.title: ', item.title);
                return `
            <li>${item.title}</li>
            `
            }
            if(item.playlist_title !== undefined) {
                console.log('item.playlist_title: ', item.playlist_title);
                return `
            <li>${item.playlist_title}</li>
            `
            }
        })//.join('');
    })//.join('');
    console.log('onTest: ',  onTest);
    return onTest;
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
    console.log('myResult', myResult);
    displayResults(myResult);
    console.log('displayResults(myResult)', displayResults(myResult));

    search.value = '';
}