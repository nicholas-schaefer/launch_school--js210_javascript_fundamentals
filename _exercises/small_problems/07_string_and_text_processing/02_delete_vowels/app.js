function removeVowels(input){
  return input.reduce((newArray, str)=>{
    newArray.push(str.replace(/[aeiou]/ig, ''))
    return newArray;
  }, [])
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// let input1 = 'ABaC';

// console.log(removeVowels(input1));// [BC]
