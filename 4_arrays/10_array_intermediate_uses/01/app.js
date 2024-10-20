function oddElementsOf(arr) {
  let oddElements = []
  for (let idx = 0; idx < arr.length; idx +=1 ){
    if (idx %2 === 1) oddElements.push( arr[idx])
  }
console.log(oddElements)
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]