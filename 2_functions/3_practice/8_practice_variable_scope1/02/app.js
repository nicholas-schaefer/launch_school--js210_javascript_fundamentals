let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);



// function testScope() {
//   var a = undefined;
//   a = 'inner';
//   console.log(a);
// }

// let a = 'outer';

// console.log(a); //;'outer' global variable a defined by 'let' keyword on line 1
// testScope(); //'inner' function scoped variable created and logged
// console.log(a); //;'outer' global variable a defined