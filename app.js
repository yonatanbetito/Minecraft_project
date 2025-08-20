// >>> Elemntes
const contiener = document.getElementById("contiener"); // contiener = grid

const cells = document.getElementsByClassName("cell"); // all the cell in the grid

// material
const oakleaves = document.getElementById("oak-leaves"); // leaves of the tree
const oaklog = document.getElementById("oak-log"); // root of the tree
const grass = document.getElementById("grass");
const dirt = document.getElementById("dirt");
const stone = document.getElementById("stone");

// tools
const axe = document.getElementById("axe"); // for oak-log
const shears = document.getElementById("shears"); // for oak-leaves
const shovel = document.getElementById("shovel"); // for grass & dirt
const pickaxe = document.getElementById("pickaxe"); // for stone
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

const stackMaterial = {
  oaklog: 0,
  oakleaves: 0,
  grass: 0,
  dirt: 0,
  stone: 0
}

function toolValidation(cell, tool) {
  if (tool === "axe") {
    cell.classList.remove("oak-log");
    stackMaterial.oaklog ++;
    oaklog.style.backgroundImage = "url(/utils/oak-leaves.webp)";
  }
  if (tool === "shears") {
    cell.classList.remove("oak-leaves");
    stackMaterial.oakleaves++;
    grass.style.backgroundImage = "url(/utils/oak-leaves.webp)";
  }
  if (tool === "shovel") {
    cell.classList.remove("grass");
    stackMaterial.grass++;
    grass.style.backgroundImage = "url(/utils/grass.webp)";
  }
  if (tool === "shovel") {
    cell.classList.remove("dirt");
    stackMaterial.dirt++;
    dirt.style.backgroundImage = "url(/utils/dirt.webp)";
  }
  if (tool === "pickaxe") {
    cell.classList.remove("stone");
    stackMaterial.stone++;
    stone.style.backgroundImage = "url(/utils/stone.webp)";
  }
}

function removeMaterial() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      toolValidation(cells[i], "shovel");
    });
  }
} 

removeMaterial();

// function selecetMaterial(cell) {
//   const 
// }


// function createMaterial() {
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener("click", (element) => {
//       element.classList.add("")
//     })
//   }
// }