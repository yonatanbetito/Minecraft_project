// >>> Elemntes
const contiener = document.getElementById("contiener"); // contiener = grid

const cells = document.getElementsByClassName("cell"); // all the cell in the grid

// material
const oakleaves = document.getElementsByClassName("oak-leaves"); // leaves of the tree
const oaklog = document.getElementsByClassName("oak-log"); // root of the tree
const grass = document.getElementsByClassName("grass");
const dirt = document.getElementsByClassName("dirt");
const stone = document.getElementsByClassName("stone");

// tools
const axe = document.getElementsById("axe"); // for oak-log
const shears = document.getElementsById("shears"); // for oak-leaves
const shovel = document.getElementsById("shovel"); // for grass & dirt
const pickaxe = document.getElementsById("pickaxe"); // for stone
// End Element <<<

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


function toolValidation(cell, tool) {
  if (tool === "axe") {
    cell.classList.remove("oak-log");
  }
  if (tool === "shears") {
    cell.classList.remove("oak-leaves");
  }
  if (tool === "shovel") {
    cell.classList.remove("grass");
    cell.classList.remove("dirt");
  }
  if (tool === "pickaxe") {
    cell.classList.remove("stone");
  }
}

function removeMaterial() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      toolValidation(cells[i], "pickaxe");
    });
  }
} 
