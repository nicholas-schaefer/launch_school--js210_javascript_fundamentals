let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


function copyObj(objToCopy, keysToCopy = []){
    const resultObj = {}
    let objToCopyKeys = Object.keys(objToCopy)

    if (keysToCopy === undefined || keysToCopy.length === 0 ) {
        keysToCopy = objToCopyKeys
    }

    keysToCopy.forEach((key) => {
        if (objToCopyKeys.includes(key)){
            resultObj[key] = objToCopy[key]
        }
    })
    return resultObj
}
