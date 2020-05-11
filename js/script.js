const html = document.querySelector('html');
const button = document.querySelector('button');
const aside = document.querySelector('#side');
const main = document.querySelector('#main');

html.addEventListener('click', function(event) {
    console.log(event.target);
    if (event.target == button) {
        button.style.display="none";
        aside.style.display="block";
        aside.classList.add('animationAppear', 'col-2');
        main.classList.remove('col-12');
        main.classList.add('col-10')
    } else {
        button.style.display="block";
        aside.style.display="none";
        aside.classList.remove('animationAppear', 'col-2');
        main.classList.remove('col-10');
        main.classList.add('col-12')
    }
})