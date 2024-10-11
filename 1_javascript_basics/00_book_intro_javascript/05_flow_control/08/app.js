function numberRange(int){
    solution = int + ' ';
    switch (true) {
        case (int < 0):
            solution += "is less than 0";
            break;
        case (int <= 50):
            solution += "is between 0 and 50";
            break;
        case (int <= 100):
            solution += "is between 51 and 100";
            break;
        default:
            solution += "is greater than 100";
            break;
    }
    return solution;
}



console.log(numberRange(162));