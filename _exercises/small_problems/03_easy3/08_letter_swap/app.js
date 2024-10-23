const swap = (input) =>
    input.split(' ').map((segment) =>
        Array.from(segment).reverse().join('')
    ).join(' ');



console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"