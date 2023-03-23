const gap = 30;

const elem = document.querySelector('input[type="range"]');
const carousel_testimonials = document.getElementById("testimonials-carousel");
const content = document.getElementById("content");
const review = document.querySelectorAll(".testimonials-container-review");
const mini_testimonials = document.querySelector('#mini-testimonials');
const first_review = document.querySelector("#first-review");
const second_review = document.querySelector("#second-review");
const third_review = document.querySelector("#third-review");
const fourth_review = document.querySelector("#fourth-review");
const fifth_review = document.querySelector("#fifth-review");
const sixth_review = document.querySelector("#sixth-review");
const seventh_review = document.querySelector("#seventh-review");
const eigth_review = document.querySelector("#eigth-review");
const nineth_review = document.querySelector("#nineth-review");
const tenth_review = document.querySelector("#tenth-review");
const eleventh_review = document.querySelector("#eleventh-review");


const first = document.querySelector("#a-review");
const second = document.querySelector("#b-review");
const third = document.querySelector("#c-review");
const fourth = document.querySelector("#d-review");
const fifth = document.querySelector("#i-review");
const sixth = document.querySelector("#f-review");
const seventh = document.querySelector("#j-review");
const eigth = document.querySelector("#r-review");
const nineth = document.querySelector("#n-review");
const tenth = document.querySelector("#t-review");
const eleventh = document.querySelector("#v-review");



const image_close = document.querySelector(".close");

const rangeValue = function(){
  const newValue = elem.value;
  const target = document.querySelector('.value');
  target.innerHTML = newValue;
  return newValue;
}

elem.addEventListener("input", rangeValue);



  let arr = [];
  const moveTestimonials = () => {
        let number = rangeValue();
        console.log(number);
        console.log(arr);
    if (arr.length <= 6){
      carousel_testimonials.scrollBy(268 + gap, 0);
        arr.push(number);
    } else if (arr.length > 6 || arr.length < 13){
      carousel_testimonials.scrollBy(-(268 + gap), 0);
        arr.push(number);
    } 
    if (arr.length >= 14) {
        arr.length = 0;
    }
  };

elem.addEventListener("input", moveTestimonials);


let width = carousel_testimonials.offsetWidth;
window.addEventListener("resize", e => (width = carousel_testimonials.offsetWidth));


function closeesTimonials(event) {
   open()
}



function open (){
  const child = review.forEach((a) => {
    console.log(a);
    mini_testimonials.removeChild(a);
    mini_testimonials.classList.remove("open");
  });
}


first_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    first.classList.toggle('active');
    mini_testimonials.appendChild(first);
    mini_testimonials.addEventListener("click", e => {
        first.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
  });

second_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    second.classList.toggle('active');
    mini_testimonials.appendChild(second);
    mini_testimonials.addEventListener("click", e => {
        second.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});

third_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    third.classList.toggle('active');
    mini_testimonials.appendChild(third);
    mini_testimonials.addEventListener("click", e => {
        third.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});

fourth_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    fourth.classList.toggle('active');
    mini_testimonials.appendChild(fourth);
    mini_testimonials.addEventListener("click", e => {
        fourth.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});

fifth_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    fifth.classList.toggle('active');
    mini_testimonials.appendChild(fifth);
    mini_testimonials.addEventListener("click", e => {
        fifth.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});

sixth_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    sixth.classList.toggle('active');
    mini_testimonials.appendChild(sixth);
    mini_testimonials.addEventListener("click", e => {
        sixth.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});

seventh_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    seventh.classList.toggle('active');
    mini_testimonials.appendChild(seventh);
    mini_testimonials.addEventListener("click", e => {
        seventh.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});

eigth_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    eigth.classList.toggle('active');
    mini_testimonials.appendChild(eigth);
    mini_testimonials.addEventListener("click", e => {
        eigth.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});

nineth_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    nineth.classList.toggle('active');
    mini_testimonials.appendChild(nineth);
    mini_testimonials.addEventListener("click", e => {
        nineth.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});

tenth_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    tenth.classList.toggle('active');
    mini_testimonials.appendChild(tenth);
    mini_testimonials.addEventListener("click", e => {
        tenth.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});

eleventh_review.addEventListener('click', e => {
    mini_testimonials.classList.toggle('open');
    eleventh.classList.toggle('active');
    mini_testimonials.appendChild(eleventh);
    mini_testimonials.addEventListener("click", e => {
        eleventh.classList.remove('active');
        mini_testimonials.classList.remove("open");
      });
});
