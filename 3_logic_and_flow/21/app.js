const charCode = {
    'A': 65,
    'Z': 90,
    'a': 97,
    'z': 122,
};

// Transforms letter characters while maintaining original case, 1 character forward
// Returns transformed string character
function rotateCharOnce(startChar) {
    let lowerLimit;
    let upperLimit;
    let notALetter;

    if (startChar.search(/[A-Z]/) === 0) {
        lowerLimit = charCode.A;
        upperLimit = charCode.Z;
    } else if (startChar.search(/[a-z]/) === 0) {
        lowerLimit = charCode.a;
        upperLimit = charCode.z;
    } else{
        notALetter = true;
    }

    let counter = startChar.charCodeAt(0);

    return function increment(){
        // Ensure we only transform letters
        if (notALetter) return startChar;

        counter += 1;
        if (counter > upperLimit) {
            counter = lowerLimit;
        }
        return String.fromCharCode(counter);
    }
}

// Transforms letter characters while maintaining original case, 13 characters forward
// Returns string of transformed characters
function rot13(input) {
    rotatedCharsArray = Array.from(input).map((char)=>{
        let rotateOnce = rotateCharOnce(char);
        let rotatedChar = '';
        for (let i = 0; i < 13; i +=1){
            rotatedChar = rotateOnce();
        }
        return rotatedChar;
    });

    let rotatedString = rotatedCharsArray.join('');
    return rotatedString;
}

let testString;

testString = 'Teachers open the door, but you must enter by yourself.'
console.log(rot13(testString))

let solution = 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'
console.log(rot13(testString) == solution );