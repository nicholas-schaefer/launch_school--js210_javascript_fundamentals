const CHAR_CODES = {a: 97, z: 122}

function isLetterOdd(char){
  if (typeof char !== 'string' || char.length !== 1) return
  const downcasedChar = char.toLowerCase();
  const charCode = downcasedChar.charCodeAt(0);
  if (charCode < CHAR_CODES.a || charCode > CHAR_CODES.z) return

  return charCode % 2 == 1;
}

console.log(isLetterOdd(undefined))
console.log(isLetterOdd('A'))
console.log(isLetterOdd('a'))
console.log(isLetterOdd('b'))
console.log(isLetterOdd('B'))

// const arr1 = ['x', 'y', 'z'];

// solution =
// arr1.filter((el)=>{
//   return el === 'y'
// })

// console.log(solution)