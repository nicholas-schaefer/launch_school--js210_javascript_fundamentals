function repeatedCharacters(input){
    const inputLength = input.length;
    const charsObject = {};
    const finalCharsObject = {};
    for (let i = 0; i < inputLength; i +=1){
        const char = input[i].toLowerCase()

        if (charsObject[char] === undefined) {
            charsObject[char] = 1;
        } else{
            charsObject[char] += 1;
        }
        if (charsObject[char] > 1){
            finalCharsObject[char] = charsObject[char]
        }
    }
    console.log(finalCharsObject)
}


repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }