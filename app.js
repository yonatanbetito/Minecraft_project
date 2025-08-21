// >>> Elemntes
const contiener = document.getElementById("contiener"); // contiener = grid

const cells = document.getElementsByClassName("cell"); // all the cell in the grid

// material
const materials = document.getElementsByClassName("materials");

// tools
const axe = document.getElementById("axe"); // for oak-log
const shears = document.getElementById("shears"); // for oak-leaves
const shovel = document.getElementById("shovel"); // for grass & dirt
const pickaxe = document.getElementById("pickaxe"); // for stone

const aside = document.querySelector("aside");

const stack = document.querySelector(".stack");

const tools = document.querySelectorAll(".tool");

let mode = null;
let selectedTool = null;
let selectedMaterial = null;

const divNumber = document.createElement("div");
divNumber.classList.add("numbers");
aside.appendChild(divNumber);

const divlog = document.createElement("div");
const divleaves = document.createElement("div");
const divgrass = document.createElement("div");
const divdirt = document.createElement("div");
const divstone = document.createElement("div");
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

function selectTool() {
  for (let i = 0; i < tools.length; i++) {
    tools[i].addEventListener("click", function () {
      toolType(tools[i]);
      selectedTool = tools[i].id;
      selectedMaterial = null;
      mode = "tool";
    });
  }
}

selectTool();

function addMaterialToStack(materialId) {
  let divMaterial = stack.querySelector(`.${materialId}Stack`);
  console.log(divMaterial);
  
  if (!divMaterial) {
    divMaterial = document.createElement("div");
    divMaterial.classList.add("materials", materialId + "Stack");
    divMaterial.id = materialId;
    divMaterial.style.backgroundImage = `url('/utils/${materialId}.webp')`;
    console.log(divMaterial);
    stack.appendChild(divMaterial);
  }

  stackMaterial[materialId]++;

  checkStackAndActivate();
}

function toolsValidation(cell, tool) {
  if (tool === "axe" && cell.classList.contains("oaklog")) {
    addMaterialToStack("oaklog");
    cell.classList.remove("oaklog");
    divlog.textContent = stackMaterial.oaklog;
    divNumber.appendChild(divlog);
  }
  if (tool === "shears" && cell.classList.contains("oakleaves")) {
    addMaterialToStack("oakleaves");
    cell.classList.remove("oakleaves");
    divleaves.textContent = stackMaterial.oakleaves;
    divNumber.appendChild(divleaves);
  }
  if (tool === "shovel" && cell.classList.contains("grass")) {
    addMaterialToStack("grass");
    cell.classList.remove("grass");
    divgrass.textContent = stackMaterial.grass;
    divNumber.appendChild(divgrass);
  }
  if (tool === "shovel" && cell.classList.contains("dirt")) {
    addMaterialToStack("dirt");
    cell.classList.remove("dirt");
    divdirt.textContent = stackMaterial.dirt;
    divNumber.appendChild(divdirt);
  }
  if (tool === "pickaxe" && cell.classList.contains("stone")) {
    addMaterialToStack("stone");
    cell.classList.remove("stone");
    divstone.textContent = stackMaterial.stone;
    divNumber.appendChild(divstone);
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
  console.log(material)
  console.log(material.id)
  contiener.style.cursor = `url('/utils/cursor/${material.id}.jpg') 16 16, auto`;
}

function createMaterial(material) {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (stackMaterial[material.id] > 0) {
        cells[i].classList.add(material.id);
        stackMaterial[material.id]--;
        
        const counter = document.getElementById(`${material.id}`);
        if (counter) {
          counter.textContent = stackMaterial[material.id];
        }
      }
    });
  }
}

function selectMaterial() {
  for (let i = 0; i < materials.length; i++) {
    materials[i].addEventListener("click", (e) => {
      materialsValidation(materials[i]);
      createMaterial(materials[i]);
      selectedTool = null;
      mode = "material";
    });
  }
}

function checkStackAndActivate() {
  for (let key in stackMaterial) {
    if (stackMaterial[key] > 0) {
      selectMaterial();
      break;
    }
  }
}
// selectMaterial();


const numbers = [];

for (let i = 0; i < 4; i++) {
  const num = Math.floor(Math.random() * (1099 - 1006 + 1)) + 1006;
  numbers.push(num);
}