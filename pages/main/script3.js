const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ALL_CARD = document.querySelectorAll(".card");
const ITEM_ACTIVE = document.querySelector("#item-active");



function getRandomNum(min = 0, max = 7) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNum(0, 7);



const createCardTemplate = () => {
    const card = document.createDocumentFragment();
    card.appendChild(ALL_CARD[getRandomNum()]);
    card.appendChild(ALL_CARD[getRandomNum()]);
    card.appendChild(ALL_CARD[getRandomNum()]);
    card.appendChild(ALL_CARD[getRandomNum()]);
    card.appendChild(ALL_CARD[getRandomNum()]);
    card.appendChild(ALL_CARD[getRandomNum()]);
    card.cloneNode(true);
    return card;
  }

  ITEM_ACTIVE.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const card = createCardTemplate();
    ITEM_ACTIVE.appendChild(card);
}
  


  const moveLeft = () => {
    ITEM_LEFT.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        const card = createCardTemplate();
        ITEM_LEFT.appendChild(card);
    }
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };
  
  const moveRight = () => {
    ITEM_RIGHT.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      const card = createCardTemplate();
      ITEM_RIGHT.appendChild(card);
    }
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };
  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
  
  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    } else {
      CAROUSEL.classList.remove("transition-right");
      document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }
    
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
  })