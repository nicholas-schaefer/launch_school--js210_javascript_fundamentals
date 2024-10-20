function endsOf(beginningArr, endingArr) {
    let solutionArray = [];
    if (beginningArr.length !== 0) solutionArray.push(beginningArr[0]);
    if (endingArr.length !== 0) solutionArray.push(endingArr.length -1);

    console.log(solutionArray);
  }

  endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]