'use strict';

function trim(input) {
    let input_length = input.length;
    let limitsForSlice = {
        'begin': null,
        'end':   null,
    }

    function calculateBeginningSliceLimit() {
        for (let i = 0; i < input_length; i += 1) {
            // console.log(i, input[i] !== ' ', input[i])
            if (input[i] !== ' ') {
                limitsForSlice.begin = i;
                break;
            }
        }
    }

    function calculateEndingSliceLimit() {
        for (let i = input_length - 1; i >= 0; i -= 1) {
            // console.log(i, input[i] !== ' ', input[i])
            if (input[i] !== ' ') {
                limitsForSlice.end = i + 1;
                break;
            }
        }
    }

    calculateBeginningSliceLimit();
    calculateEndingSliceLimit();
    let solution = input.slice(limitsForSlice.begin, limitsForSlice.end);
    console.log(solution);

    return solution;
}


trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""