// Exporting Module
console.log('Exporting Module');
//Blocking Code
// console.log('Start fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('finish fetching');
const shippingCost = 10;
export const cart = [];

export const addtoCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}; // named export

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// when we want to export only one thing
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
