let test = 0;
let actualNumber = 0;

const testFunction = function(test, actualNumber) {
    if(test > actualNumber) {
        return +1;
    } else if (test < actualNumber) {
        return -1;
    } else {
        return 0;
    }
};