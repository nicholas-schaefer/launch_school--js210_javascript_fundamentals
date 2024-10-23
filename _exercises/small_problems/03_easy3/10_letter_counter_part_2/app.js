function wordSizes(input){
    input = input.trim()                        // Remove leading/trailing spaces
    input = input.replace(/ +(?= )/g,'');       // Remove duplicate spaces
    input = input.replace(/[^A-Za-z\s]/g,'')    // Keep only letters and spaces
    console.log(input)

    const wordSizesTally = {};
    if (input.length === 0) return wordSizesTally

    for (const word of input.split(' ')){
        let wordLength = word.length;
        wordSizesTally[wordLength] ??= 0
        wordSizesTally[wordLength] += 1;
    }
    return wordSizesTally
}






console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}