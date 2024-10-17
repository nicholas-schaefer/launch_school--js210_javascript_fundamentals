function century(input){
    const AD_OR_BC = input >=0 ? "AD" : "BC";
    const centuryNumber = calculateCenturyNumber(input);
    const ordinal = calculateOrdinal(centuryNumber);
    console.log(`${centuryNumber}${ordinal} century ${AD_OR_BC}.`);
}

function calculateCenturyNumber(input){
    return Math.ceil(Math.abs(input)/100);
}

function calculateOrdinal(century){
    let centuryStr = String(century)
    let lastTwoDigitsStr = centuryStr.length > 2 ? centuryStr.substring(centuryStr.length -2, centuryStr.length) : centuryStr;
    let lastTwoDigitsNumber = parseInt(lastTwoDigitsStr, 10);
    let lastDigitStr = lastTwoDigitsStr[lastTwoDigitsStr.length -1];

    if (lastTwoDigitsNumber >= 4 && lastTwoDigitsNumber <= 20) return 'th';
    if (lastDigitStr === '1') return 'st';
    if (lastDigitStr === '2') return 'nd';
    if (lastDigitStr === '3') return 'rd';
    if (lastDigitStr === '4') return 'th';
    if (lastDigitStr === '5') return 'th';
    if (lastDigitStr === '6') return 'th';
    if (lastDigitStr === '7') return 'th';
    if (lastDigitStr === '8') return 'th';
    if (lastDigitStr === '9') return 'th';
}



century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"