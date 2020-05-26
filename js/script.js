const html = document.querySelector('html');
const button = document.querySelector('#arrow');
const spanBtn = document.querySelector('#spanAppearBtn');
const aside = document.querySelector('#side');
const main = document.querySelector('#main');

/*animation pour faire apparaître et disparaître aside onclick*/
html.addEventListener('click', function(event) {
    if (window.matchMedia("(max-width:768px)").matches) {
       if (event.target === button) {
           spanBtn.classList.remove('d-block', 'd-sm-block');
           spanBtn.classList.add('d-none');
           aside.classList.remove('d-none');
           aside.classList.add('d-block', 'animationAppear');
           main.classList.remove('col-12');
           main.classList.add('col-10')
       } else {
           spanBtn.classList.remove('d-none');
           spanBtn.classList.add('d-block', 'd-sm-block');
           aside.classList.remove('animationAppear', 'd-block');
           aside.classList.add('d-none');
           main.classList.remove('col-10');
           main.classList.add('col-12')
       }
   }
})

/* Listen for click on sidebar buttons, and call the appropriate php page for display */
let sideButtons = document.querySelectorAll('.sideButton');
sideButtons.forEach(sideButton => {
    sideButton.addEventListener('click', async function(event) {
        if (event.target.innerHTML === 'My comments') {
            let partial = await getPartial('./apps/my-comments-display.php');
            displayPartial(partial);
        } else if (event.target.innerHTML === 'My playlists') {
            let partial = await getPartial('./partials/my-playlists.php');
            displayPartial(partial);
        }
    })
});

