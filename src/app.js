import isYes from './is-yes.js';

const test = document.getElementById('test');
const result = document.getElementById('result');

test.onclick = function() {
    let name = '';
    let firstName = prompt('What is your first name?');
    name = name + firstName;
    let lastName = prompt('What is your last name?');
    name = name + ' ' + lastName;
    let correctAnswers = 0;
    const answer1 = prompt('The green sturgeon reaches maturity at around 12 years of age (Y/N)');
    if(!isYes(answer1)) {
        correctAnswers += 1;
    }
    const answer2 = prompt('Unlike other marine mammals, sea otters have no layer of blubber (Y/N)');
    if(isYes(answer2)) {
        correctAnswers += 1;
    }
    const answer3 = prompt('All salmon, including coho, are anadromous, meaning they spend part of their lives in the ocean and part in freshwater (Y/N)'); 
    if(isYes(answer3)) {
        correctAnswers += 1;
    }
    result.textContent = `Your name is ${name}, and you got ${Math.floor((correctAnswers / 3) * 100)}% on your teset!`;
};