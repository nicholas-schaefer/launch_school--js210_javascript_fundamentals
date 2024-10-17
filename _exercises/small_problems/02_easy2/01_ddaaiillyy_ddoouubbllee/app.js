function crunch(input){
    let crunchedStr = "";
    let previousChar = "";

    for (let i = 0, iLength = input.length; i < iLength; i += 1 ){
        let currentChar = input[i];
        if (currentChar !== previousChar) crunchedStr += currentChar;
        previousChar = currentChar;
    }
    console.log(crunchedStr);
    return crunchedStr
}


function app(){
    crunch('ddaaiillyy ddoouubbllee');    // "daily double"
    crunch('4444abcabccba');              // "4abcabcba"
    crunch('ggggggggggggggg');            // "g"
    crunch('a');                          // "a"
    crunch('');                           // ""
}

app();