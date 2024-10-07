const characters = document.querySelectorAll(".character");
const positions = [0, 1, 2];

function updateCarousel() {
  characters.forEach((char, index) => {
    const currentPosition = positions[index];
    const translateX = (currentPosition - 1) * 180;
    const scale = currentPosition === 1 ? 1.2 : 1;
    char.style.transform = `translateX(${translateX}px) scale(${scale})`;
    if (currentPosition === 1) {
      char.style.zIndex = "2";
      char.classList.add("character-center");
    } else {
      char.style.zIndex = "1";
      char.classList.remove("character-center");
    }
  });
}

characters.forEach((char, index) => {
  char.addEventListener("click", () => {
    if (positions[index] === 1) return;
    const rotatePosition = positions[index] > 1 ? 2 : 1;
    for (let i = 0; i < rotatePosition; i++) {
      positions.push(positions.shift());
    }

    updateCarousel();
  });
});

updateCarousel();
