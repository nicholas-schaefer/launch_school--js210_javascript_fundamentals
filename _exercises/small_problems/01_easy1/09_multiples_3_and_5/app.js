function multisum(input) {
    multiplesSet = new Set();
    const MULTIPLES_TO_CHECK = Object.freeze([3,5]);

    for (el of MULTIPLES_TO_CHECK) {
        for (let i = el; i <= input; i +=el){
            multiplesSet.add(i)
        }
    }

    let sum = [...multiplesSet].reduce((accumulator, currentValue)=>
        accumulator + currentValue
    );
    console.log(sum);
}



multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168