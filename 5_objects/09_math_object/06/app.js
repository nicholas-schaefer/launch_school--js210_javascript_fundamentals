const thisOrThat = function randomlySelectOneOfTwo(a, b) {
    return Math.random() < 0.5 ? a : b;
}

// console.log(thisOrThat('heads', 'tails'))


const randomInt = function randomInclusiveIntWithinRange(min, max){
    if (min === max) {
        return min;
      } else if (min > max) {
        [min, max] = [max, min];
      }

      let difference = max - min + 1;
      return Math.floor(Math.random() * difference) + min;
}

console.log(randomInt(1, 5));
console.log(randomInt(1, 5));
console.log(randomInt(1, 5));
console.log(randomInt(1, 5));
console.log(randomInt(1, 5));
console.log(randomInt(1, 5));