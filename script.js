// script.js

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.product-card button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Product added to cart!');
      // You can expand this functionality to actually add items to a cart
    });
  });
});
