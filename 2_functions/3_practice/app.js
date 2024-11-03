function average(...nums){
    const count = nums.length;
    if (count === 0) return
    return nums.reduce((sum, num) => sum + num, 0) / count;
}

const temperatures = [5, 8, 11, 15, 22];

console.log(average(...temperatures));