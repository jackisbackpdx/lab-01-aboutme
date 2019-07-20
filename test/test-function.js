
function testFunction(test, actualNumber) {
    if(test > actualNumber) {
        return 1;
    } else if(test < actualNumber) {
        return -1;
    } else {
        return 0;
    }
}

export default testFunction;