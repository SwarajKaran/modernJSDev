// Importing Module
// import { addtoCart, totalPrice as price, tq } from './shoppingCart.js';
// addtoCart('bread', 5);
// console.log(price, tq);

import * as ShoppingCart from './shoppingCart.js';

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
// top level await ES 2022
/*
//AWAIT keyword working outside async function - happens only if script type is module
// console.log('Start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
// const lastPost = getLastPost();
// console.log(lastPost);
// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addtoCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return {
    addtoCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addtoCart('apples', 4);
ShoppingCart2.addtoCart('pizza', 2);
console.log(ShoppingCart2);
*/

// commonJS in node js. Here, it will not work

// //EXPORT
// export.addtoCart = unction (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//   );
// };
// //IMPORT
// const {addtoCart} = require('./shoppingCart.js')
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es'; //works when biuilding with parcel
const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// don't reload whole page, just inject changes - parcel will understand this
if (module.hot) {
  module.hot.accept();
}
