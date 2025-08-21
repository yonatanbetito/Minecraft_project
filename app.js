// >>> Elemntes
const contiener = document.getElementById("contiener"); // contiener = grid

const cells = document.getElementsByClassName("cell"); // all the cell in the grid

// material
const materials = document.getElementsByClassName("material");
const oakleavesId = document.getElementById("oak-leaves"); // leaves of the tree
const oaklogId = document.getElementById("oak-log"); // root of the tree
const grassId = document.getElementById("grass");
const dirtId = document.getElementById("dirt");
const stoneId = document.getElementById("stone");

// tools
const axe = document.getElementById("axe"); // for oak-log
const shears = document.getElementById("shears"); // for oak-leaves
const shovel = document.getElementById("shovel"); // for grass & dirt
const pickaxe = document.getElementById("pickaxe"); // for stone

const aside = document.querySelector("aside");

const tools = document.querySelectorAll(".tool");
let selectedTool = null;


const divNumber = document.createElement("div");
divNumber.classList.add("numbers");
aside.appendChild(divNumber);

const h3log = document.createElement("h3");
const h3leaves = document.createElement("h3");
const h3grass = document.createElement("h3");
const h3dirt = document.createElement("h3");
const h3stone = document.createElement("h3");
// End Element <<<

const stackMaterial = {
  oaklog: 0,
  oakleaves: 0,
  grass: 0,
  dirt: 0,
  stone: 0,
};

let count = 0;
for (let index = 0; index < 100 * 30; index++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.id = index + 1;
  if (index >= 100 * 10 && index < 100 * 11) {
    div.classList.add("grass");
  } else if (index >= 100 * 11 && index < 100 * 16) {
    div.classList.add("dirt");
  } else if (index >= 100 * 16 && index < 100 * 28) {
    div.classList.add("stone");
  } else if (index >= 100 * 28) {
    div.classList.add("bedrock");
  }
  contiener.appendChild(div);
}

function toolType(tool) {
  contiener.style.cursor = `url('/utils/cursor/${tool.id}.png') 16 16, auto`;
}

function selecetTool() {
  for (let i = 0; i < tools.length; i++) {
    tools[i].addEventListener("click", function () {
      toolType(tools[i]);
      selectedTool = tools[i].id;
    });
  }
}

selecetTool();

function toolsValidation(cell, tool) {
  if (tool === "axe" && cell.classList.contains("oak-log")) {
    cell.classList.remove("oak-log");
    oaklogId.style.backgroundImage = "url(/utils/oak-log.webp)";
    stackMaterial.oaklog++;
    h3log.textContent = stackMaterial.oaklog;
    divNumber.appendChild(h3log);
  }
  if (tool === "shears" && cell.classList.contains("oak-leaves")) {
    cell.classList.remove("oak-leaves");
    oakleavesId.style.backgroundImage = "url(/utils/oak-leaves.webp)";
    stackMaterial.oakleaves++;
    h3leaves.textContent = stackMaterial.oakleaves;
    divNumber.appendChild(h3leaves);
  }
  if (tool === "shovel" && cell.classList.contains("grass")) {
    cell.classList.remove("grass");
    grassId.style.backgroundImage = "url(/utils/grass.webp)";
    stackMaterial.grass++;
    h3grass.textContent = stackMaterial.grass;
    divNumber.appendChild(h3grass);
  }
  if (tool === "shovel" && cell.classList.contains("dirt")) {
    cell.classList.remove("dirt");
    dirtId.style.backgroundImage = "url(/utils/dirt.webp)";
    stackMaterial.dirt++;
    h3dirt.textContent = stackMaterial.dirt;
    divNumber.appendChild(h3dirt);
  }
  if (tool === "pickaxe" && cell.classList.contains("stone")) {
    cell.classList.remove("stone");
    stoneId.style.backgroundImage = "url(/utils/stone.webp)";
    stackMaterial.stone++;
    h3stone.textContent = stackMaterial.stone;
    divNumber.appendChild(h3stone);
  }
}

function removeMaterial() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      toolsValidation(cells[i], selectedTool);
    });
  }
}

removeMaterial();

function materialsValidation(material) {
  contiener.style.cursor = `url('/utils/cursor/${material.id}.jpg') 16 16, auto`;
}

function createMaterial(material) {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (stackMaterial[material.id] > 0) {
        cells[i].classList.add(`${material.id}`);
        stackMaterial[material.id]--;
      }
    });
  }
}

function selecetMaterial() {
  for (let i = 0; i < materials.length; i++) {
    materials[i].addEventListener("click", function () {
      materialsValidation(materials[i]);
      createMaterial(materials[i]);
    });
  }
}

selecetMaterial();

const numbers = [];

for (let i = 0; i < 4; i++) {
  const num = Math.floor(Math.random() * (1099 - 1006 + 1)) + 1006;
  numbers.push(num);
}