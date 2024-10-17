function triangle(maxStarsCount){
    for (let i = 1; i <= maxStarsCount; i +=1 ){
        let spaceCharCount = maxStarsCount - i;
        let starCharCount = i;
        console.log(' '.repeat(spaceCharCount) + '*'.repeat(starCharCount));
    }
}







triangle(9)