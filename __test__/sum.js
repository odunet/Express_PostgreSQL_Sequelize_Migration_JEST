/**
 * Sample functions to test JEST functionality
 */

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Synchronous sum
function sum(a, b) {
  return a + b;
}

// Asynchronous sum
function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(a + b);
    }, 3000);
  });
}
module.exports = { asyncSum, sum };
