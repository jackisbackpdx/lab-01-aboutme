import getThrow from './computerChoice';

const throwButton = document.getElementById('throwbutton');

const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const tiesCount = document.getElementById('ties-count');
const computerImage = document.getElementById('computer-choice');
const addMessage = document.getElementById('message');

let wins = 0;
let losses = 0;
let ties = 0;

let message = '';
// throw rock, paper, or scissors, based off random number. Function onclick of a random number.

throwButton.addEventListener('click', () => {
    const computerChoice = getThrow();
    const userChoice = document.querySelector('input:checked').value;

    if(userChoice === 'rock' && computerChoice === 'scissors') {
        message = 'you won!';
        wins++;
        winCount.textContent = wins;
    } else if(userChoice === 'rock' && computerChoice === 'paper') {
        message = 'you lost!';
        losses++;
        lossCount.textContent = losses;
    } else if(userChoice === 'paper' && computerChoice === 'rock') {
        message = 'you won!';
        wins++;
        winCount.textContent = wins;
    } else if(userChoice === 'paper' && computerChoice === 'scissors') {
        message = 'you lost!';
        losses++;
        lossCount.textContent = losses;
    } else if(userChoice === 'scissors' && computerChoice === 'rock') {
        message = 'you lost!';
        losses++;
        lossCount.textContent = losses;
    } else if(userChoice === 'scissors' && computerChoice === 'paper') {
        message = 'you won!';
        wins++;
        winCount.textContent = wins;
    } else {
        message = 'it was a tie!';
        ties++;
        tiesCount.textContent = ties;
    }
    computerImage.classList.remove('invisible');
    const src = 'assets/images/' + computerChoice + '.jpg';
    computerImage.src = src;

    addMessage.textContent = message;
});


// get user choice of throw, assign numberical value to choice as to decide

// define whether the user won the throw or the computer did, if the user lost, subtract money from their total amount of money