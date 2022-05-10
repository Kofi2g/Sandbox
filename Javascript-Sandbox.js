const wrapper = document.querySelector(".wrapper");
const hover = document.querySelectorAll(".hover");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll("p");

for (let i = 0; i < h2.length; i++) {
    h2[i].classList.add("hover")
}

for (let i = 0; i < p.length; i++) {
    p[i].classList.add("hover")
}



wrapper.addEventListener("click", (e) => {

    if (e.target.matches(".hover")) {
        console.log("found");
            for (let i =0; i < hover.length;i++) {

                const r = () => Math.random() * 256 >> 0;
                hover[i].style.background = `rgb(${r()}, ${r()}, ${r()})`;
            }
    
    }
})

/* 
Alternative RGB function

 const randomN = () => {
    for (let i = 0; i < 3; i++) {
        return (Math.floor(Math.random() * 255) + 1);
    }
}

const color = `rgb(${randomN()}, ${randomN()}, ${randomN()})`;
*/