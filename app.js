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

// בחירת כל הכלים
const tools = document.querySelectorAll(".tool");
let selectedTool = null;
let ghost = null;

// יצירת ghost שמלווה את העכבר
function createGhost() {
  const div = document.createElement("div");
  div.classList.add("tool-ghost");
  document.body.appendChild(div);
  return div;
}

// בחירת כלי
function selectTool(tool) {
  selectedTool = tool.id;
  console.log("selectedTool:", selectedTool);
  tools.forEach((t) => t.classList.remove("active"));
  tool.classList.add("active"); // הדגשת הכלי שנבחר

  const imgSrc = tool.querySelector("img").src;
  document.body.style.cursor = `url(${imgSrc}) , auto`;

  ghost.style.backgroundImage = `url(${imgSrc})`;
  ghost.style.display = "block";
}

// הזזת ה-ghost עם העכבר
function moveGhost(e) {
  if (selectedTool) {
    ghost.style.left = e.pageX + "px";
    ghost.style.top = e.pageY + "px";
  }
}

// מאזינים לכלים
function setupToolListeners() {
  tools.forEach((tool) => {
    tool.addEventListener("click", () => selectTool(tool));
  });
}

// מאזין להזזת עכבר
function setupMouseMove() {
  document.addEventListener("mousemove", moveGhost);
}

// התחלת הפונקציות
function initTools() {
  ghost = createGhost();
  setupToolListeners();
  setupMouseMove();
}

// קריאה להתחלה
initTools();



   


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

const stackMaterial = {
  oaklog: 0,
  oakleaves: 0,
  grass: 0,
  dirt: 0,
  stone: 0,
};

function toolValidation(cell, tool) {
  if (tool === "axe") {
    cell.classList.remove("oak-log");
    stackMaterial.oaklog++;
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

const numbers = [];
const listId = [];
const leastIndex = [];

function addId(startBotonPart, endBotonPart, startTopPart, endTopPart) {
  for (let i = startBotonPart; i <= endBotonPart; i++) {
    listId.push(i);
  }
  for (let j = startTopPart; j <= endTopPart; j++) {
    listId.push(j);
  }
}
function craetTrunk(numThree) {
  numThree = 6
  for (let i = 0; i < numThree; i++) {
    const num = Math.floor(Math.random() * (1094 - 1006 + 1)) + 1006;
    numbers.push(num);
    let idTrunk = 0;
    const higtThree = 3 + Math.floor(Math.random() * 2);
    const rout = [numbers[i]];
    for (idTrunk = 0; idTrunk < higtThree; idTrunk++) {
      const IndexTrunk = rout[idTrunk] - 100;
      rout.push(IndexTrunk);
      const pars = String(IndexTrunk);
      let trunk = document.getElementById(pars);
      trunk.classList.add("trunk");
    }
    leastIndex.push(rout[idTrunk]);
  }
}

function creatLeaves(numLeaves) {
  numLeaves = 3
  for (let idxSell = 0; idxSell < leastIndex.length; idxSell++) {
    let startThreeLeves = leastIndex[idxSell] - 103;
    let endThreeLeves = leastIndex[idxSell] - 97;

    for (let level = 0; level < numLeaves; level++) {
      const nextStartThreeLeves = startThreeLeves - 100;
      const nextEndThreeLeves = endThreeLeves - 100;
      addId(startThreeLeves, endThreeLeves, nextStartThreeLeves, nextEndThreeLeves);
      startThreeLeves = nextStartThreeLeves - 99;
      endThreeLeves = nextEndThreeLeves - 101;
    }
  }
}

function insertIdThree() {
  for (let idSell = 0; idSell <= listId.length; idSell++) {
    const parsLeaves = String(listId[idSell]);
    let leaves = document.getElementById(parsLeaves);
    leaves.classList.add("leaves");
  }
}
craetTrunk()
creatLeaves()
insertIdThree()
