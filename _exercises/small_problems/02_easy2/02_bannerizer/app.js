function logInBox(inputText){
    const inputTextLength =         inputText.length;
    const topAndBottomRowStart =    '+-';
    const topAndBottomRowEnd =      '-+';
    const innerRowStart =           '+ ';
    const innerRowEnd =             ' +';

    let rowTopAndBottom =   topAndBottomRowStart + '-'.repeat(inputTextLength) + topAndBottomRowEnd;
    let rowInner =          innerRowStart + ' '.repeat(inputTextLength) + innerRowEnd;
    let rowMiddle =         innerRowStart + inputText + innerRowEnd;

    console.log(rowTopAndBottom);
    console.log(rowInner);
    console.log(rowMiddle);
    console.log(rowInner);
    console.log(rowTopAndBottom);
}


logInBox('To boldly go where no one has gone before.');
logInBox('');
