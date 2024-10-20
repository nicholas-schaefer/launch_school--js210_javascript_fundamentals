function copyProperties(hal, sal){
    let counterPropsCopies = 0
    for (const pKey in hal){
        sal[pKey] = hal[pKey]
        counterPropsCopies +=1;
    }
    return counterPropsCopies
}

let hal = {
    model: 9000,
    enabled: true,
  };

  let sal = {};
  console.log(copyProperties(hal, sal));  // 2
  console.log(sal);                       // { model: 9000, enabled: true }