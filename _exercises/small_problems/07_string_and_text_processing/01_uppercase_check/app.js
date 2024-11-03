const isUppercase = function areAllCharsUppercase(input) {
  return input.toUpperCase() === input;
  for (let i = 0, length = input.length; i < length; i +=1){
    if (/[a-z]/.test(input[i])) return false;
  }
  return true
}




console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true


