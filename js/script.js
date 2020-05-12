/*animation pour faire apparaître et disparaître aside onclick*/
const html = document.querySelector('html');
const button = document.querySelector('button');
const aside = document.querySelector('#side');
const main = document.querySelector('#main');

window.onresize = functionMobile;

function functionMobile() {
    if (window.matchMedia("(min-width:768px)").matches) {
        aside.style.display="block";
        button.style.display="none";
        main.classList.remove('col-12');
        main.classList.add('col-10')
      } else {
        aside.style.display="none";
        button.style.display="block";
        main.classList.remove('col-10');
        main.classList.add('col-12');
        html.addEventListener('click', function(event) {
                 {
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
                }
            })
    }
}

