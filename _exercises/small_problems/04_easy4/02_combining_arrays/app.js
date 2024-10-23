function union(arr1, arr2){

    const unionSet = new Set();
    for (const arr of [arr1, arr2]){
        for (el of arr){
            unionSet.add(el);
    }

    }
    Array.from(unionSet).sort((a,b)=> a - b)
}


union([11, 1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]