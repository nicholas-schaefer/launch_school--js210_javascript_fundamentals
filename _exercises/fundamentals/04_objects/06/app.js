const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

//myArray = [5,5, '-1': 5, '-2':5]

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

//   return sum / array.length;
  return sum / Object.keys(myArray).length;
}

console.log(average(myArray));