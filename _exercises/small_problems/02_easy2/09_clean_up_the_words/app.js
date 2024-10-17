function cleanUp(input) {
    let solutionStr = "";
    let previousChar = "";

    for (const char of Array.from(input)) {
        if (isLetter(char)) {
            solutionStr += char;
            previousChar = char;
        } else if (previousChar !== ' ') {
            solutionStr += ' ';
            previousChar = ' ';
        }
    }
    console.log(solutionStr);
}

function isLetter(char) {
    return char.search(/[a-z]/i) === 0
}


cleanUp("---what's my +*& line?");    // " what s my line "