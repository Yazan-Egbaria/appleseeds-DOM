const texts = document.querySelectorAll(".text");

window.addEventListener("scroll", () => {
  texts.forEach((text) => {
    if (text.getBoundingClientRect().top < window.innerHeight - 200) {
      text.classList.add("active");
    } else {
      text.classList.remove("active");
    }
  });
});
