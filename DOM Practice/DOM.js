const container = document.querySelector("#container");
const div = document.createElement("div");
const heading1 = document.createElement("h1");
const heading3 = document.createElement("h3");
const divWithStyle = document.createElement("div");

div.style.color = "red";
div.textContent = "Hey I'm Red!";
container.appendChild(div);

heading3.style.color = "blue";
heading3.textContent = "Hey I'm Blue!";
container.appendChild(heading3);

heading1.textContent = "I'm In A Div";
divWithStyle.textContent = "ME TOO!";
heading1.setAttribute("style", "background-color: pink; padding: 5px; margin: 0; border: 10px solid;");
heading1.appendChild(divWithStyle);
container.appendChild(heading1);
