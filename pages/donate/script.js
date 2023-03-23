// Меню

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

// Форма для данатов
const input_radio = document.querySelectorAll(".count");
const count_first = document.querySelector("#count1");
const count_second = document.querySelector("#count2");
const count_third = document.querySelector("#count3");
const count_fourth = document.querySelector("#count4");
const count_fifth = document.querySelector("#count5");
const count_sixth = document.querySelector("#count6");
const count_seventh = document.querySelector("#count7");
const count_eigth = document.querySelector("#count8");

const quantity = document.querySelector("#quantity");
const count_donate = document.querySelector(".count-donate");
console.log(count_donate);
console.log(quantity);
// Элемент выбран по умолчанию
function check() {
    document.getElementById("count6").checked = true;
    document.getElementById('quantity').value = count_sixth.value;
}
check()

// Значение выбраного элемента попадает в поле стоимости
count_first.addEventListener("input", e => {
    if (count_first.checked) {
        document.getElementById('quantity').value = count_first.value;
      }
});

count_second.addEventListener("input", e => {
    if (count_second.checked) {
        document.getElementById('quantity').value = count_second.value;
      }
});

count_third.addEventListener("input", e => {
    if (count_third.checked) {
        document.getElementById('quantity').value = count_third.value;
      }
});

count_fourth.addEventListener("input", e => {
    if (count_fourth.checked) {
        document.getElementById('quantity').value = count_fourth.value;
      }
});

count_fifth.addEventListener("input", e => {
    if (count_fifth.checked) {
        document.getElementById('quantity').value = count_fifth.value;
      }
});

count_sixth.addEventListener("input", e => {
    if (count_sixth.checked) {
        document.getElementById('quantity').value = count_sixth.value;
      }
});

count_seventh.addEventListener("input", e => {
    if (count_seventh.checked) {
        document.getElementById('quantity').value = count_seventh.value;
      }
});

count_eigth.addEventListener("input", e => {
    if (count_eigth.checked) {
        document.getElementById('quantity').value = count_eigth.value;
      }
});


// Значение поля стоимости совпадает, появляется стиль 
quantity.addEventListener("input", e => {
    if(quantity.value == count_first.value){
        document.getElementById("count1").checked = true;
    } else if(quantity.value == count_second.value){
        document.getElementById("count2").checked = true;
    } else if (quantity.value == count_third.value){
        document.getElementById("count3").checked = true;
    } else if (quantity.value == count_fourth.value){
        document.getElementById("count4").checked = true;
    } else if (quantity.value == count_fifth.value){
        document.getElementById("count5").checked = true;
    } else if (quantity.value == count_sixth.value){
        document.getElementById("count6").checked = true;
    } else if (quantity.value == count_seventh.value){
        document.getElementById("count7").checked = true;
    } else if (quantity.value == count_eigth.value){
        document.getElementById("count8").checked = true;
    } else {
        document.getElementById("count1").checked = false;
        document.getElementById("count2").checked = false;
        document.getElementById("count3").checked = false;
        document.getElementById("count4").checked = false;
        document.getElementById("count5").checked = false;
        document.getElementById("count6").checked = false;
        document.getElementById("count7").checked = false;
        document.getElementById("count8").checked = false;
    }
});
// Ограничение поля стоимости 4 знака 
function limitLength(event, value, maxLength){
    if(value.toString().length >= maxLength){
        event.preventDefault();
    }
}