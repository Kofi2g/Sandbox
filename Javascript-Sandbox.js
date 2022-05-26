const wrapper = document.querySelector(".wrapper");
const hover = document.querySelectorAll(".hover");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll("p");

for (let head of h2) {
  head.classList.add("hover")
}

for (let para of p) {
  para.classList.add("hover")
}

wrapper.addEventListener("click", (e) => {

  if (e.target.matches(".hover")) {
    console.log("colour changed");
    for (let i = 0; i < hover.length; i++) {

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


// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`making a request to ${location}`)
//     if (location === "google") {
//       resolve("google says hi")
//     } else {
//       reject("you can only talk to google");
//     }
//   })
// }
// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log("processing request")
//     resolve(`Extra information + ${response}`);
//   })
// } 
// function logMessage(response) {
//   return new Promise((resolve, reject) => {
//     resolve(`message processed + ${response}`);
//   })
// }

// makeRequest("google")
// // Handling promise (the resolve) using then()
// .then((response) => {
//   console.log(`response recieved`)
//   // returning promise with RESPONSE covering the resolved initial function
//   return processRequest(response)
//   //Handling the second promise
//   .then((processedResponse) => {
//     console.log(processedResponse)
//     // Additional function
//     return logMessage(processedResponse)
//     .then((message) => {
//       console.log(message);
//     });
//     // chain works by using return/then
//   }); 
// });

// async function doWork() {

// const response = await makeRequest("google")
// console.log("response recieved")
// const processedResponse = await processRequest(response)
// console.log(processedResponse);
// const logMessage = await processRequest(processedResponse);
// console.log(logMessage);

// } 

// doWork()



// numbers = [2, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, ]

// console.log(numbers);

// const newNumbers = numbers.map((num) =>
//   num * 2
// )

// console.log(newNumbers);

// const filteredNumbers = numbers.filter((num) => {
//   return num < 4;
// })

// const filteredNumbers2 = numbers.filter((num) => {
//   return num > 4;
// })

// console.log(filteredNumbers);
// console.log(filteredNumbers2);

// const find = numbers.find((num) => num === 5)
// console.log(find);

// const kofi = {
//   firstName: "kofi",
//   lastName: "bonful",
//   age: 23,
//   hobbies: {
//     hobby1: "basketball",
//     hobby2: "gym"
//   }
// };


// const {firstName, lastName, age} = kofi;
// console.log(firstName, lastName, age);

// function destructure({firstName, lastName, age}) {
//   console.log(firstName, lastName, age);
// }

// destructure(kofi)

// const animals1 = ["lion", "hyena", "elephant"];
// const animals2 = ["dog", "cat", "hamster"]
// const animals3 = [...animals1, ...animals2]
// console.log(animals3);

companies = [{
    name: "company one",
    category: "technology",
    start: 2002,
    end: 2012,
    type: "prime"
  },
  {
    name: "company two",
    category: "finance",
    start: 1990,
    end: 2017,
    type: "regular"
  },
  {
    name: "company three",
    category: "retail",
    start: 1997,
    end: 2020,
    type: "prime"
  },
  {
    name: "company four",
    category: "technology",
    start: 2000,
    end: 2022,
    type: "regular"
  },
  {
    name: "company five",
    category: "auto",
    start: 1976,
    end: 2002,
    type: "prime"
  },
]


// const primeArray = [];

// function isPrime() {
//   companies.forEach(c => {
//     if (c.type === "prime") {
//       primeArray.push(c.name); 
//     }
//   });
// }

// isPrime()
// console.log(primeArray);


// const prime = companies.filter(isPrime)
// console.log(prime);


// write a function that returns prime
// const prime = companies.filter((company) => (company.type === "prime"))
// console.log(prime);

function newString(input) {
  if (input.includes("New")) {
    console.log(input)
  } else {
    const string = `New ${input}`;
    console.log(string);
  }
}

newString("New way to live")

const addNew = (str) => str.indexOf("New") === 0 ? str : `New ${str}`;

console.log(addNew("way to make money"))



const catFact = async () => {
  const response = await fetch("https://catfact.ninja/fact")
  const data = await response.json()
  return data;
}
catFact().then(data => console.log(data))


const catPromise = fetch("https://catfact.ninja/fact");
catPromise.then(response => response.json())
.then(data => console.log(data));

fetch("https://catfact.ninja/fact")
.then(res => res.json())
.then(data => console.log(data))

const myName = "Kofi"
console.log(myName);

console.log(myName === "Kofi" ? true : false);