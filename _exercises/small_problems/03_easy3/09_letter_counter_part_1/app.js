function wordSizes(input){
    input = input.trim()
    input = input.replace(/ +(?= )/g,'');

    wordSizesTally = {};
    if (input.length === 0) return wordSizes

    for (word of Array.from(input.split(' '))){
        let wordLength = word.length;
        wordSizesTally[wordLength] = wordSizesTally[wordLength] || 0
        wordSizesTally[wordLength] += 1;
    }
    return wordSizesTally
}



console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}