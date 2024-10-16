function startsWith(string, searchString) {
  let stringLength = string.length;
  let searchStringLength = searchString.length;
  if (stringLength < searchStringLength) return false;

  return searchString === string.slice(0, searchStringLength)
}

  let str = 'We put comprehension and mastery above all else';
  console.log(startsWith(str, 'We'));              // true
  console.log(startsWith(str, 'We put'));          // true
  console.log(startsWith(str, 'put'));             // false

  console.log(startsWith(str, ''));                // true
  let longerString = 'We put comprehension and mastery above all else!';
  console.log(startsWith(str, longerString));      // false