function generatePattern(input){
    let starArray = []
    let starlessArray = []
    for(i=1; i <= input; i+=1){
        starlessArray.push(i)
        starArray.push('*')
    }
    let starlessStr = starlessArray.join('');
    let starStr = starArray.join('');

    for(i=1; i <= input; i+=1){
        console.log(starlessStr.slice(0, i) + starStr.slice(0, -i));
    }


}


generatePattern(100);
