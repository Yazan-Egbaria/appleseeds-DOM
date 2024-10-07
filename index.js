const div = document.getElementById("keyDisplay");

document.addEventListener("keydown", (e) => {
  div.innerText = e.key;
});
