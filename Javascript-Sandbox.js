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
    paraTwo.classList.toggle("customColor5");

    });

paraThree.addEventListener("click", () => {
    paraThree.classList.toggle("customColor2");
    });

paraFour.addEventListener("click", () => {
    paraFour.classList.toggle("customColor4");
    });

paraFive.addEventListener("click", () => {
    paraFive.classList.toggle("customColor5");
    });


    //make selection random