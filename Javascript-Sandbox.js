const paraOne = document.querySelector(".one-container")
const paraTwo = document.querySelector(".two-container")
const paraThree = document.querySelector(".three-container")
const paraFour = document.querySelector(".four-container")
const paraFive= document.querySelector(".five-container")
const paraSix = document.querySelector(".six-container")
const paraSeven = document.querySelector(".seven-container")
const paraEight = document.querySelector(".eight-container")
const paraNine = document.querySelector(".nine-container")


paraOne.addEventListener("click", () => {
    paraOne.classList.toggle("customColor1");
});

paraTwo.addEventListener("click", () => {
    paraTwo.classList.toggle("customColor2");
});

paraThree.addEventListener("click", () => {
    paraThree.classList.toggle("customColor3");
});

paraFour.addEventListener("click", () => {
    paraFour.classList.toggle("customColor4");
});

paraFive.addEventListener("click", () => {
    paraFive.classList.toggle("customColor5");
});

paraSix.addEventListener("click", () => {
    paraSix.classList.toggle("customColor6");
});

paraSeven.addEventListener("click", () => {
    paraSeven.classList.toggle("customColor7");
});

paraEight.addEventListener("click", () => {
    paraEight.classList.toggle("customColor8");
});

paraNine.addEventListener("click", () => {
    paraNine.classList.toggle("customColor9");
});

    //make selection random