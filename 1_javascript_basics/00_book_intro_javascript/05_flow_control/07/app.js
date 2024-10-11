function uppercaseLargeWord(str){
    return str.length > 10 ? str.toUpperCase() : str
}

// word1 = "hello";
// word2 = "hello world";
// console.log(uppercaseLargeWord(word1));
// console.log(uppercaseLargeWord(word2));


words = ["hello", "hello world"]

words.forEach((str, i) => {
    console.log(i, uppercaseLargeWord(str))
});


// assume that it is a String
// count total number of characters
//  - if charcount greater than 10 return non mutated uppercase version
//  - else return same thing
