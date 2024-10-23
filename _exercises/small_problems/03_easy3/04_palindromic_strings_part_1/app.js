function isPalindrome(input){
    let inputLength = input.length;
    let charsArray = Array.from(input);

    let halfFloor = Math.floor(inputLength / 2)

    let firstHalfArray = charsArray.slice(0, halfFloor);
    let secondHalfArray = charsArray.slice(inputLength - halfFloor);

    return firstHalfArray.join('') === secondHalfArray.reverse().join('')
}


console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true