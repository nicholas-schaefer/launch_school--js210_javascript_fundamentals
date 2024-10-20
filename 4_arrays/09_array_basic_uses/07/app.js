function lastNOf(arr, count) {
    let arrLength = arr.length;
    if (count > arrLength) return arr;

    return arr.slice(arrLength - count);
  }

  let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
console.log(lastNOf(digits, 8));    // returns [16, 23, 42]