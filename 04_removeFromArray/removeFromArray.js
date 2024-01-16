const removeFromArray = function(arr, ...remove) {
    //iterate through all arguments passed
    for(let i = 0; i < remove.length; i++){
        //find indexof argument to be removed
        let index = arr.indexOf(remove[i]);
        //if it exists splice it remove 1 item AKA we're replacing it
        //NOTE splice will modify array not create a new one
        if(index >= 0 ){
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
