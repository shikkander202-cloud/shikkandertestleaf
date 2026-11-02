
// var allows re-declaration

var a = 10;
var a = 20;

console.log("var value:", a);

// let does not allow re-declaration
let b = 10;
// let b = 20; // SyntaxError

console.log("let value:", b);

// const does not allow re-declaration
const c = 30;
// const c = 50; // SyntaxError

console.log("const value:", c);
