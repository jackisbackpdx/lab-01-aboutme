function isYes(answer) {
    answer = answer.toLowerCase();
    if(answer === 'yes') {
        return true;
    } else if(answer === 'y') {
        return true;
    } else if(answer === 'no') {
        return false;
    } else if(answer === 'n') {
        return false;
    }
}

export default isYes;