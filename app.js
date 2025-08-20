const contiener = document.getElementById("contiener");
let count = 0
for (let index = 0; index < 100 * 30; index++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.id = index+1
  if (index >= 100 * 10 && index < 100 * 11) {
    div.classList.add("grass");
  } else if (index >= 100 * 11 && index < 100 * 16) {
    div.classList.add("dirt");
  } else if (index >= 100 * 16 && index < 100 * 28) {
    div.classList.add("stone");
  } else if (index >= 100 * 28) {
    div.classList.add("bedrock");
  }
  contiener.appendChild(div)
  
}



const numbers = [];

for (let i = 0; i < 4; i++) {
  const num = Math.floor(Math.random() * (1099 - 1006 + 1)) + 1006;
  numbers.push(num);
}

// console.log(numbers);
