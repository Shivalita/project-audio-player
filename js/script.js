/*animation pour faire apparaître et disparaître aside onclick*/
const html = document.querySelector('html');
const button = document.querySelector('#appearBtn');
const aside = document.querySelector('#side');
const main = document.querySelector('#main');

window.onresize = functionMobile;

function functionMobile() {
    if (window.matchMedia("(min-width:768px)").matches) {
        console.log('la résolution est supérieure à 768px');
        aside.style.display="block";
        button.style.display="none";
        main.classList.remove('col-12');
        main.classList.add('col-10')
      } else {
        console.log('la résolution est inférieure à 768px');
        aside.style.display="none";
        button.style.display="block";
        main.classList.remove('col-10');
        main.classList.add('col-12');

    }
}


html.addEventListener('click', function(event) {
    if (window.matchMedia("(max-width:768px)").matches) {
       if (event.target === button) {
           console.log("j'ai cliqué sur le bouton", event.target);
           button.style.display="none";
           aside.style.display="block";
           aside.classList.add('animationAppear', 'col-2');
           main.classList.remove('col-12');
           main.classList.add('col-10')
       } else {
           console.log('j\'ai cliqué sur autre chose', event.target, button);
           button.style.display="block";
           aside.style.display="none";
           aside.classList.remove('animationAppear', 'col-2');
           main.classList.remove('col-10');
           main.classList.add('col-12')
       }
   }
})

/* Tab system */
let contentDiv = document.querySelector('#content');
let partial;

/* get php partial to be displayed in content */
async function getPartial(url) {
    let response =  await fetch(url)
    let result = await response.text();
    storePartial(result);
}

function storePartial(partialData) {
    partial = partialData;
}

/* Check if hash changes in url */
window.addEventListener('hashchange', async function() {
    if (window.location.hash === '#comments') {
        await getPartial('./partials/comments.php');
        contentDiv.innerHTML = partial;
    }
})