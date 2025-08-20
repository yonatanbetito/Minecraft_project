const tools = document.querySelectorAll(".tool");
let selectedTool = null; 

tools.forEach(tool => {
  tool.addEventListener("click", (e) => {
    selectedTool = tool.id;
    console.log("Selected tool:", selectedTool);
    
    tools.forEach(t => t.style.borderColor = "#666"); // הסרת הדגשה מכל הכלים
    tool.style.borderColor = "yellow"; // להדגיש הכלי שנבחר
  });
});
