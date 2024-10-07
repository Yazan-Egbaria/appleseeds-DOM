const data = {
  fruits: ["Apple", "Banana", "Cherry"],
  vegetables: ["Carrot", "Broccoli", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
};

const categories = document.getElementById("categories");
const items = document.getElementById("items");

categories.addEventListener("click", (e) => {
  const category = e.target.dataset.category;
  if (data[category]) {
    items.innerHTML = data[category]
      .map((item) => {
        return item;
      })
      .join(", ");
  }
});
