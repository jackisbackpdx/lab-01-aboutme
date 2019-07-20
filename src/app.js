import isYes from './is-yes.js';

const test = document.getElementById('test');
const result = document.getElementById('result');

test.onclick = function() {
    let name = '';

    const firstName = prompt('What is your first name?');
    name = name + firstName;

    const lastName = prompt('What is your last name?');
    name = name + ' ' + lastName;

    const confirmed = confirm('Are you sure you want to take this test ' + firstName + '?');
    if(confirmed === false) {
        return;
    }

    let correctAnswers = 0;

    const answer1 = prompt(firstName + ', does he green sturgeon reaches maturity at around 12 years of age?(Y/N)');
    if(!isYes(answer1)) {
        correctAnswers += 1;
    }
    const answer2 = prompt(firstName + ', unlike other marine mammals, sea otters have no layer of blubber, is this true?(Y/N)');
    if(isYes(answer2)) {
        correctAnswers += 1;
    }
    const answer3 = prompt('And finally' + firstName + ', Are all salmon, including coho, are anadromous, meaning they spend part of their lives in the ocean and part in freshwater (Y/N)'); 
    if(isYes(answer3)) {
        correctAnswers += 1;
    }
    if(correctAnswers === 3) {
        result.textContent = `Congratulations ${name}, you got a ${Math.floor((correctAnswers / 3) * 100)}% test score!`;
        location.hash = '#result';
    } else if(correctAnswers < 3) {
        result.textContent = `Not looking so good ${name}, you got a ${Math.floor((correctAnswers / 3) * 100)}% test score. You should go back and study.`;
        location.hash = '#result';
    } 
};
    