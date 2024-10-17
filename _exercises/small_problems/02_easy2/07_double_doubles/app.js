
const twice = ((input)=>
    isPalindrome(String(input)) ? input : input * 2
)

function isPalindrome(input){
    let inputLength = input.length
    if (inputLength % 2 === 1) return false

    let firstHalf = input.substring(0, inputLength/2 );
    let secondHalf = input.substring(inputLength/2, inputLength);
    return firstHalf === secondHalf
}




console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676