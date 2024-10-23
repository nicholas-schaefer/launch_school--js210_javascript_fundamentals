function reverseString(input){
    return input.split('').reverse().join('');
}

const reverseWords = (input) => (
    input.split(' ').map((word)=>
        word.length >=5 ? reverseString(word) : word
    ).join(' ')
);



console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"