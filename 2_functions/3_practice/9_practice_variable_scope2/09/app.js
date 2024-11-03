let a = ['outer'];
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo.push('inner');
  b = 'inner';
}




// function setScope(foo) {
//   foo = 'inner';
//   b = 'inner';
// }

// let a = 'outer';
// let b = 'outer';

// console.log(a); // outer
// console.log(b); // outer
// setScope(a);
// console.log(a); //outer
// console.log(b); //inner