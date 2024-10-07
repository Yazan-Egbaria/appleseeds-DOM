const openBtn = document.getElementById("showModalBtn");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", () => {
  overlay.style.display = "block";
});

overlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) overlay.style.display = "none";
});
