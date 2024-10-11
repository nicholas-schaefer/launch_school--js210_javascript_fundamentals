// function bar(arg1, arg2) {
//     let foo = 'Hello';
//     const qux = {
//       abc: [1, 2, 3, [4, 5, 6]],
//       def: null,
//       ghi: NaN,
//       jkl: foo,
//       mno: arg1,
//       pqr: arg2,
//     };

//     return qux;
//   }

//   let result = bar('Victor', 'Antonina');



// // function is an object
// // bar is a variable(function names are variables)
// // arg1, arg2 are both variables (parameters are variables)
// function bar(arg1, arg2) {
//     //foo is a variable
//     //hello is a primitive (strings are primitives)
//     let foo = 'Hello';
//     //qux is a variable
//     //{...} is an object (simple object)
//     /// abc ...pqr are property names
//     const qux = {
//         // [1, 2, 3, [4, 5, 6]] is an object
//         // [4, 5, 6] is an object
//         // 1 2 3 4 5 6 are all primitives (integers are primitives)
//         // 0,1,2,3, are object property names (also primitives)
//         // 0,1,2 are object property names (also primitives in string values)

//       abc: [1, 2, 3, [4, 5, 6]],
//       def: null, // primitive
//       ghi: NaN, // primitive
//       jkl: foo, //foo is a variable
//       mno: arg1, // still a variable
//       pqr: arg2, // still a variable
//     };

//     return qux;
// }


// //result is a variable
// //bar is still a variable (function name)
// //'Victor' and "Antonina" are primitives (strings)
// let result = bar('Victor', 'Antonina');