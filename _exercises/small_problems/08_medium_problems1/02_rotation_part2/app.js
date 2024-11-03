console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

function rotateRightmostDigits(intToRotate, rotateCount){
  if (!Number.isInteger(intToRotate) || !Number.isInteger(rotateCount)) return intToRotate
  if (rotateCount <= 1) return intToRotate
  const strToRotate = String(intToRotate);

  const firstHalfStr = strToRotate.slice(0, strToRotate.length - rotateCount)
  const secondHalfRotatedStr =
    strToRotate.slice(-rotateCount)
    .split('')
    .reverse()
    .join('')
  return parseInt(firstHalfStr.concat(secondHalfRotatedStr), 10)
}