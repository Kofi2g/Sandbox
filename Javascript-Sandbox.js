const paraOne = document.querySelector(".one-container")
const paraTwo = document.querySelector(".two-container")
const paraThree = document.querySelector(".three-container")
const paraFour = document.querySelector(".four-container")
const paraFive= document.querySelector(".five-container")
const paraSix = document.querySelector(".six-container")
const paraSeven = document.querySelector(".seven-container")
const paraEight = document.querySelector(".eight-container")
const paraNine = document.querySelector(".nine-container")

const handleParaElements = (element, number) => {
    element.addEventListener("click", () => {
        element.classList.toggle(`customColor${number}`);
    });
}

handleParaElements(paraOne,1);
handleParaElements(paraTwo,2);
handleParaElements(paraThree,3);
handleParaElements(paraFour,4);
handleParaElements(paraFive,5);
handleParaElements(paraSix,6);
handleParaElements(paraSeven,7);
handleParaElements(paraEight,8);
handleParaElements(paraNine,9);

paraOne.addEventListener("click", (e) => {
    paraOne.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},10)`;
    console.log(e.offsetX, e.offsetY);
})