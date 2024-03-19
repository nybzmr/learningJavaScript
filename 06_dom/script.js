const outerDiv = document.createElement("div");
outerDiv.className = "container"
outerDiv.setAttribute("id", "outer-div")
const innerDiv = document.getElementsByClassName("heading-container");
const addText = document.createTextNode("Chai Aur Code")
outerDiv.appendChild(addText);
document.body.appendChild(outerDiv);