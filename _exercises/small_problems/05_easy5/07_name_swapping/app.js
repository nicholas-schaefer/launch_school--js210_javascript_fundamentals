function swapName(input){
    return input.split(' ').reverse().join(', ')
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"