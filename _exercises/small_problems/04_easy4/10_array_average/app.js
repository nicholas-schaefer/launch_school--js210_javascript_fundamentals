const average = (scores) =>{
    let sum = scores.reduce((acc, cur) => acc + cur);
    let elementsCount = scores.length;
    return Math.floor(sum / elementsCount)
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40