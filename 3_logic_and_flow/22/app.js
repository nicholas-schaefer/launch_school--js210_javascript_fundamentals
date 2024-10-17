function indexOf(firstString, secondString) {
    matchedIndexesArray = matchIndexes(firstString, secondString);
    let matchesCount = matchedIndexesArray.length;

    let solution;
    switch (matchesCount) {
        case 0:
            solution = -1;
            break;
        default:
            solution = matchedIndexesArray[0];
    }
    return solution;
}

function lastIndexOf(firstString, secondString) {
    matchedIndexesArray = matchIndexes(firstString, secondString);
    let matchesCount = matchedIndexesArray.length;

    let solution;
    switch (matchesCount) {
        case 0:
            solution = -1;
            break;
        case 1:
            solution = matchedIndexesArray[0];
            break;
        default:
            solution = matchedIndexesArray[matchesCount - 1];
    }
    return solution;
}

function matchIndexes(firstString, secondString) {
    const matchesArray = []
    const fl = firstString.length
    const sl = secondString.length

    // console.log(secondString, i, firstString[i]);

    for (let i = 0; i < fl - sl + 1; i += 1) {
        let startIndex = i;
        let endIndex = i + sl - 1;
        // console.log(startIndex, endIndex)
        let tempSubstring = "";
        for (let j = startIndex; j <= endIndex; j += 1) {
            // console.log(j, firstString[j])
            tempSubstring += firstString[j]
        }
        // console.log('---');
        // console.log(i, tempSubstring);
        // console.log('---');
        if (tempSubstring === secondString) {
            // console.log('hit')
            // console.log(tempSubstring)
            // matchesArray.push(i, tempSubstring)
            matchesArray.push(i)
        }
    }
    return matchesArray;
}

// console.log(matchIndex('Some strings', 's'))
// console.log(matchIndex('Blue Whale', 'Whale'))
// console.log(matchIndex('Blue Whale', 'Blute'))
// console.log(matchIndex('Blue Whale', 'leB'))

// console.log(matchIndex('Blue Whale, Killer Whale', 'Whale'))
// console.log(matchIndex('Blue Whale, Killer Whale', 'all'))



  console.log(indexOf('Some strings', 's'));                      // 5
  console.log(indexOf('Blue Whale', 'Whale'));                    // 5
  console.log(indexOf('Blue Whale', 'Blute'));                    // -1
  console.log(indexOf('Blue Whale', 'leB'));                      // -1

  console.log(lastIndexOf('Some strings', 's'));                  // 11
  console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
  console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1