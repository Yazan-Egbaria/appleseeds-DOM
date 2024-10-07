const h1 = document.getElementsByTagName("h1")[0];
const contextMenu = document.getElementById("contextMenu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  contextMenu.style.top = `${e.pageY}px`;
  contextMenu.style.left = `${e.pageX}px`;
  contextMenu.style.display = "block";
});

contextMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("context-menu-item")) {
    alert(`You clicked: ${e.target.textContent}`);
  }
  contextMenu.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (e.target !== contextMenu) contextMenu.style.display = "none";
});
