// Exporting Module
console.log('Exporting Module');
const shippingCost = 10;
const cart = [];

export const addtoCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}; // named export

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
