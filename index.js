const ul = document.getElementById("navList");
const div = document.getElementById("message");

ul.addEventListener("click", (e) => {
  e.preventDefault;
  const dataLink = e.target.dataset.link;
  div.innerHTML = dataLink;
  div.style.display = "block";
  setTimeout(() => {
    div.innerHTML = "";
    div.style.display = "none";
  }, 2000);
});
