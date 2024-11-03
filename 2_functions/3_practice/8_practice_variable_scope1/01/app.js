let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);




// function testScope() {
//   let a = 'inner';
//   console.log(a);
// }

// let a = 'outer';

// console.log(a); //outer
// testScope();
// console.log(a); //inner

// `let` and `const` are keywords that define variables within a block scope.


