const firstDiv = document.getElementById("firstDiv");

firstDiv.addEventListener("mouseover", function () {
  firstDiv.style.backgroundColor = "green";
});

firstDiv.addEventListener("mouseout", function () {
  firstDiv.style.backgroundColor = "red";
});

let cards = document.querySelectorAll(".card");

let randomText = ["Some quick example text"];

function getRandomText() {
  return randomText[Math.floor(Math.random() * randomText.length)];
}

cards.forEach((card) => {
  let paragraph = document.createElement("p");
  paragraph.textContent = getRandomText();
  paragraph.style.color = "red";

  card.appendChild(paragraph);
});

let firstCard = document.querySelector(".card");
let spanElement = document.createElement("span");
spanElement.textContent = "Hello from span";
spanElement.style.backgroundColor = "blue";
spanElement.style.color = "white";

firstCard.appendChild(spanElement);

let button = document.createElement("button");
button.textContent = "Click me";

button.classList.add("custom-button");

let cardGroup = document.querySelector(".card-group");

cardGroup.insertBefore(button, firstCard);

button.addEventListener("click", function () {
  button.classList.toggle("button-active");
});

const toggleBtn = document.getElementById("toggleBtn");
const toggleParagraph = document.getElementById("toggleParagraph");

toggleBtn.addEventListener("click", function () {
  if (
    toggleParagraph.style.display === "none" ||
    toggleParagraph.style.display === ""
  ) {
    toggleParagraph.style.display = "block";
  } else {
    toggleParagraph.style.display = "none";
  }
});

toggleParagraph.addEventListener("mouseout", function () {
  toggleParagraph.style.display = "none";
});
