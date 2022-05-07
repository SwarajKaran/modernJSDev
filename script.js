// Importing Module
// import { addtoCart, totalPrice as price, tq } from './shoppingCart.js';
// addtoCart('bread', 5);
// console.log(price, tq);

import * as ShoppingCart from './shoppingCart.js';

//for named imports, use curly braces and same name
console.log('Importing Module');
// console.log(shippingCost); // it is a part of shoppingCart.js. It is not a global variable
// to use this we need tio export this variable in shoppingCart.js
ShoppingCart.addtoCart('bread', 5);
console.log(ShoppingCart.totalPrice);
