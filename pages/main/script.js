const button = document.querySelector('#button');
const mini = document.querySelector('#mini');
const body = document.body;
const menu = document.querySelector('#menu').cloneNode(1);
const logo = document.querySelector('#logo');
const nav = document.querySelector('#nav');
const logoText = document.querySelector('#Pet');
const page = document.querySelector('#text');
const logoImg = document.querySelector('#logo-img');
const logoNone = document.querySelector('#logo-img-none');
const containerHeader = document.querySelector('#container-header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

function buttonHandler (event){
    event.preventDefault();
    mini.classList.toggle('open');
    button.classList.toggle('active');
    main.classList.toggle('noscroll');
    footer.classList.toggle('noscroll');
    logo.classList.toggle('active');
    nav.classList.toggle('active');
    logoText.classList.toggle('active');
    page.classList.toggle('active');
    logoImg.classList.toggle('active');
    logoNone.classList.toggle('active');
    containerHeader.classList.toggle('active');
    addMini();
}
function addMini (){
    mini.appendChild(menu);
}

button.addEventListener('click', buttonHandler);

const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
}); 

function closeOnClick() {
  body.classList.remove("noscroll");
}

main.addEventListener('click', e => {
  mini.classList.remove('open');
    button.classList.remove('active');
    main.classList.remove('noscroll');
    footer.classList.remove('noscroll');
    logo.classList.remove('active');
    nav.classList.remove('active');
    logoText.classList.remove('active');
    page.classList.remove('active');
    logoImg.classList.remove('active');
    logoNone.classList.remove('active');
    containerHeader.classList.remove('active');
});

footer.addEventListener('click', e => {
  mini.classList.remove('open');
    button.classList.remove('active');
    main.classList.remove('noscroll');
    footer.classList.remove('noscroll');
    logo.classList.remove('active');
    nav.classList.remove('active');
    logoText.classList.remove('active');
    page.classList.remove('active');
    logoImg.classList.remove('active');
    logoNone.classList.remove('active');
    containerHeader.classList.remove('active');
});

