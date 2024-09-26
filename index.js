const btns = document.querySelectorAll(".highlightable");

btns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.classList.add("highlighted");
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseout", () => {
    btn.classList.remove("highlighted");
  });
});
