const btn = document.getElementById("clickButton");
let id = document.getElementById("counter");
let reset = document.getElementById("reset");
let counter = 0;

btn.addEventListener("click", () => {
  counter += 1;
  id.textContent = counter;
});

reset.addEventListener("click", () => {
  counter = 0;
  id.textContent = counter;
});
