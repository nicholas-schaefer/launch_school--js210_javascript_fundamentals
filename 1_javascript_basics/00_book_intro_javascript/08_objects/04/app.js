let obj = {
    b: 2,
    a: 1,
    c: 3,
};

solution =
    Object
        .keys(obj)
        .map((key)=>key.toUpperCase())

console.log(solution);

console.log(obj);