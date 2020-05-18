async function getNextCover() {
    console.log('getNextCover starts');
    console.log('le lien de la next cover :',  nextSrc);
    let data = new FormData;
    data.append('nextCover', nextSrc);
    console.log('form cover :', data);

    let coverNext = await oskourNext('./apps/getPrevAndNext.php', {
        method: 'POST',
        body: data});
    console.log('coverNext', coverNext);
    return coverNext;         
}

async function oskourNext(url, method, body) {
    console.log('get next se lance');
    let response = await fetch(url, method, body);
    console.log('response: ', response);
    let results = await response.json();
    console.log('results: ', results);
    return results.nextCover;
}

async function getPrevCover() {
    console.log('getPrevCover starts');
    let data = new FormData;
    data.append('PrevCover', prevSrc);
    console.log('form data :', data);

    let coverPrev = await oskourPrev('./apps/getPrevAndNext.php', {
        method: 'POST',
        body: data});
    console.log('coverPrev', coverPrev);
    return coverPrev;         
}

async function oskourPrev(url, method, body) {
    console.log('get Prev se lance');
    let response = await fetch(url, method, body);
    console.log('response: ', response);
    let results = await response.json();
    console.log('results: ', results);
    return results.prevCover;
}