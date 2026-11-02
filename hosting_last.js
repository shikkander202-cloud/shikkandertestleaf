
// var hoisting

console.log("var value:", a);

var a = 10;

// let hoisting

// console.log("let value:", b); // ReferenceError

let b = 20;

// const hoisting

// console.log("const value:", c); // ReferenceError

const c = 30;

console.log("let value:", b);
console.log("const value:", c);
