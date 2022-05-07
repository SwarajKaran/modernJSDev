// Importing Module
// import { addtoCart, totalPrice as price, tq } from './shoppingCart.js';
// addtoCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';

//for named imports, use curly braces and same name
console.log('Importing Module');
// console.log(shippingCost); // it is a part of shoppingCart.js. It is not a global variable { addtoCart, totalPrice as price, tq }
// to use this we need tio export this variable in shoppingCart.js
// ShoppingCart.addtoCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// import add, { addtoCart, totalPrice as price, tq } from './shoppingCart.js'; // we can mix default and named but not advisable
import add, { cart } from './shoppingCart.js';
add('butter', 250);

add('bread', 5);
add('apple', 2);
console.log(cart); // import are live connection, it is not copy of export
