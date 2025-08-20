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
  console.log("selectedTool:",selectedTool)
  tools.forEach(t => t.classList.remove("active")); 
  tool.classList.add("active");// הדגשת הכלי שנבחר

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
  tools.forEach(tool => {
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

