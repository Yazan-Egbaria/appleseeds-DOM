const btn = document.getElementById("toggleButton");

const body = document.querySelector("body");

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
