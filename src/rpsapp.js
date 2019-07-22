import getThrow from './repstest.js';

const throwButton = document.getElementById('throwbutton');

 
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const tiesCount = document.getElementById('ties-count');
const computerImage = document.getElementById('computer-choice');
const addMessage = document.getElementById('message');

let moneyRemaining = 50;
let updateMoney = document.getElementById('moneyremaining');
let amount = document.getElementById('amount');
let currentBet = 0;
let bet = document.getElementById('bet');
updateMoney.textContent = `YOU HAVE $${moneyRemaining} TO BET`;

let wins = 0;
let losses = 0;
let ties = 0;

let message = '';
// throw rock, paper, or scissors, based off random number. Function onclick of a random number.
bet.addEventListener('click', () => {
    if(moneyRemaining >= 0) {
        currentBet = Number(amount.value);
    } else {
        updateMoney.textContent = 'YOU CAN\'T BET ANYMORE MONEY, GO HOME!';
        bet.disabled = true;
        amount.disabled = true;
    }
});

throwButton.addEventListener('click', () => {
    const computerChoice = getThrow();
    const userChoice = document.querySelector('input:checked').value;

    if(userChoice === 'rock' && computerChoice === 'scissors' && moneyRemaining > 0) {
        message = `YOU WON $${currentBet}!`;
        wins++;
        winCount.textContent = wins;
        moneyRemaining += currentBet;
        updateMoney.textContent = `YOU HAVE $${moneyRemaining} TO BET`;
    } else if(userChoice === 'rock' && computerChoice === 'paper' && moneyRemaining > 0) {
        message = `YOU LOST $${currentBet}!`;
        losses++;
        lossCount.textContent = losses;
        moneyRemaining -= currentBet;
        updateMoney.textContent = `YOU HAVE $${moneyRemaining} TO BET`;
    } else if(userChoice === 'paper' && computerChoice === 'rock' && moneyRemaining > 0) {
        message = `YOU WON $${currentBet}!`;
        wins++;
        winCount.textContent = wins;
        moneyRemaining += currentBet;
        updateMoney.textContent = `YOU HAVE $${moneyRemaining} TO BET`;
    } else if(userChoice === 'paper' && computerChoice === 'scissors' && moneyRemaining > 0) {
        message = `YOU LOST $${currentBet}!`;
        losses++;
        lossCount.textContent = losses;
        moneyRemaining -= currentBet;
        updateMoney.textContent = `YOU HAVE $${moneyRemaining} TO BET`;
    } else if(userChoice === 'scissors' && computerChoice === 'rock' && moneyRemaining > 0) {
        message = `YOU LOST $${currentBet}!`;
        losses++;
        lossCount.textContent = losses;
        moneyRemaining -= currentBet;
        updateMoney.textContent = `YOU HAVE $${moneyRemaining} TO BET`;
    } else if(userChoice === 'scissors' && computerChoice === 'paper' && moneyRemaining > 0) {
        message = `YOU WON $${currentBet}!`;
        wins++;
        winCount.textContent = wins;
        moneyRemaining += currentBet;
        updateMoney.textContent = `YOU HAVE $${moneyRemaining} TO BET`;
    } else if(userChoice === computerChoice && moneyRemaining > 0){
        message = 'IT WAS A TIE!';
        ties++;
        tiesCount.textContent = ties;
    } else {
        throwButton.disabled = true;
        message = 'YOU CAN\'T BET ANYMORE MONEY, GO HOME!';
    }
    computerImage.classList.remove('invisible');
    const src = 'assets/images/' + computerChoice + '.jpg';
    computerImage.src = src;

    addMessage.textContent = message;
});


// get user choice of throw, assign numberical value to choice as to decide

// define whether the user won the throw or the computer did, if the user lost, subtract money from their total amount of money