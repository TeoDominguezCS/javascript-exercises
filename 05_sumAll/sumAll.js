const sumAll = function(min, max) {
    let sum = 0;
    //error checks
    if(min < 0 || max < 0){
        return "ERROR";
    }
    if(!Number.isInteger(max) || !Number.isInteger(min)){
        return "ERROR";
    }
    //larger number placed first
    if(min > max){
        let temp = max;
        max = min;
        min = temp;
    }
    //finding the sum
    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
