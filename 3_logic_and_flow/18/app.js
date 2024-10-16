
function toLowerCase(string) {
    if (typeof string !== 'string' ) return
    stringLength = string.length;

    let updatedCharsArray = Array.from(string).map((char)=>{
        if (char.search(/[A-Z]/) === -1){
            return char;
        }
        let asciiNumeric = char.charCodeAt(0);
        asciiNumeric += 32;
        downcasedChar = String.fromCharCode(asciiNumeric);
        return downcasedChar;
    })
    downcasedString = updatedCharsArray.join('');
    console.log(downcasedString);
    downcasedString
}

  toLowerCase('ALPHABET');    // "alphabet"
  toLowerCase('123');         // "123"
  toLowerCase('abcDEF');      // "abcdef"