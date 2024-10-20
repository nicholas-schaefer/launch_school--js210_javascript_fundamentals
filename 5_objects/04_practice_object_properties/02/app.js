function incrementProperty(inputObject, inputString){
    if (hasProperty(inputObject, inputString)){
        inputObject[inputString] +=1
    } else{
        inputObject[inputString] = 1;
    }
    return inputObject[inputString]

}

function hasProperty(inputObject, inputString){
    for (const key of Object.keys(inputObject)){
        let propertyMatched = key.indexOf(inputString) !== -1;
        if (propertyMatched) return true;
        // console.log(key, propertyMatched  )
    }
    return false
}

let wins = {
    steve: 3,
    susie: 4,
  };

  console.log(incrementProperty(wins, 'susie'));   // 5
  console.log(wins);                               // { steve: 3, susie: 5 }
  console.log(incrementProperty(wins, 'lucy'));    // 1
  console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }