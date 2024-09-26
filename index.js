const cart = {};
function addProductToCart(productId) {
  return function () {
    if (cart[productId]) {
      cart[productId]++;
    } else {
      cart[productId] = 1;
    }
    updateCart();
  };
}

function updateCart() {
  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = "";

  for (let [productId, quantity] of Object.entries(cart)) {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `Product ID: ${productId}
    Quantity: ${quantity}`;
    cartItems.appendChild(cartItemDiv);
  }
}

const productDivs = document.querySelectorAll(".product");
productDivs.forEach((el) => {
  const addToCart = el.querySelector("div button");
  const productId = el.getAttribute("data-id");

  addToCart.addEventListener("click", addProductToCart(productId));
});
