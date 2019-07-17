let guessCounter = 3;
const message = document.getElementById('message');
const actualNumber = Math.floor(Math.random() * Math.floor(20));
let guessValue = 0;
const guessMore = document.getElementById('guessmore');
const submitNumber = document.getElementById('submitnumber');
const guessLeft = document.getElementById('guessesleft');

submitNumber.addEventListener('click', function() {
    const numberInput = document.getElementById('numberinput');
    const number = numberInput.value;
    if(number > actualNumber) {
        guessValue++;
        guessCounter--;
    } else if(number < actualNumber) {
        guessValue--;
        guessCounter--;
    } else {
        guessValue = 0;
    }
// Creaeted a condition checker that increments and decrememnts a variable based on whether or not that number is too high or too low, or just right.
// It also removes one from the guess counter with each guess, which starts with a value of 3

// This will disable the input field if the user runs out of guesses, and say you lose, if they still have guesses, it will tell them to keep guessing.
    if(guessCounter === 0) {
        numberInput.disabled = true;
        message.textContent = 'You Lose';
    } else if(guessCounter > 0 && guessCounter < 3) {
        message.textContent = 'Keep Guessing';
        guessLeft.textContent = `You have ${guessCounter} guess(es) left`;
    }

// Based off of the guessValue variable, which is assigned a value based off of whether or not the user's number was too high, too low, or just right, we create
// Conditions for what happens when that number has a certain value.
    if(guessValue >= 1) {
        guessMore.textContent = 'Too High';
        guessValue = 0; 
        return;
    } else if(guessValue < 0) {
        guessMore.textContent = 'Too Low';
        guessValue = 0;
        return;
    } else {
        message.textContent = 'You Won!';
        numberInput.disabled = true;
    }
});
