async function getResults(url, method, body) {
    let response = await fetch(url, method, body);
    let results = await response.json();
    let myContent = myArray[results.name, results.album_title, results.title, results.playlist_title];
    let onTest = myContent.map(function(element) {
        return `
            <li>${element.name}</li>
            <li>${element.album_title}</li>
            <li>${element.title}</li>
            <li>${element.playlist_title}</li>
        `
    }).join('');
    console.log('onTest: ',  onTest);
    return onTest;
}