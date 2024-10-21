CHARS = ['0','1','2','3','4','5','6','7','8','9']

// console.log(CHARS[2]);

// function integerToString(input){
//     return `${input}`;
// }

function integerToString(input){
    return Array.from(input)
    return Array.from(input).map((int)=>
        CHARS[int]
    )
}


console.log(integerToString(4321));      // "4321"
// console.log(integerToString(0));         // "0"
// console.log(integerToString(5000));      // "5000"