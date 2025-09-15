/* ------------------------------------
   Part 2: Functions, Scope & Returns
------------------------------------ */

// Global variable for scope demo
let theme = "light";

// Function demonstrating scope
function toggleTheme() {
  let localMessage = ""; // local variable
  if (theme === "light") {
    theme = "dark";
    localMessage = "Theme changed to Dark!";
  } else {
    theme = "light";
    localMessage = "Theme changed to Light!";
  }
  console.log(localMessage);
}

// Calculate area of a rectangle
function calculateArea(width, height) {
  return width * height; // returns value
}

// Show result in DOM
function showArea(w, h) {
  const result = calculateArea(w, h);
  document.getElementById("calc-result").textContent =
    `Area of ${w} x ${h} rectangle = ${result}`;
}

// Random color generator
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Apply random color to section
function applyRandomColor() {
  const colorSection = document.getElementById("color-section");
  const randomColor = getRandomColor();
  colorSection.style.backgroundColor = randomColor;
}

/* ------------------------------------
   Part 3: JS + CSS Animations
------------------------------------ */

// Animate Box
function animateBox() {
  const box = document.getElementById("box");
  box.classList.toggle("move");
}

// Card Flip
function flipCard(card) {
  card.classList.toggle("flipped");
}

// Modal
function openModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("hide");
  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  modal.classList.add("hide");

  // After fadeOut animation ends, hide modal
  setTimeout(() => {
    modal.classList.remove("hide");
    modal.style.display = "none";
  }, 500);
}
