let guessCounter = 3;
let guessValue = 0;
const message = document.getElementById('message');
const guessMore = document.getElementById('guessmore');
const submitNumber = document.getElementById('submitnumber');
const guessLeft = document.getElementById('guessesleft');
const actualNumber = Math.floor(Math.random() * 21);

submitNumber.addEventListener('click', function() {
    const numberInput = document.getElementById('numberinput');
    const number = numberInput.value;
    if(number < 0 || number > 20) {
        message.textContent = 'Please provide a valid number';
        return;
    } else if(number > actualNumber) {
        guessCounter--;
        guessValue++;
    } else if(number < actualNumber) {
        guessCounter--;
        guessValue--;
    } else {
        guessValue = 0;
        guessCounter--;
    }

    if(guessCounter === 0) {
        numberInput.disabled = true;
        message.textContent = 'You Lose';
        guessLeft.textContent = `You have ${guessCounter} guesses left`;
    } else if(guessCounter === 1) {
        message.textContent = 'Keep Guessing';
        guessLeft.textContent = `You have ${guessCounter} guess left`;
    } else if(guessCounter > 0 && guessCounter < 3) {
        message.textContent = 'Keep Guessing';
        guessLeft.textContent = `You have ${guessCounter} guesses left`;
    }
    
    if(guessValue < 0) {
        guessMore.textContent = 'Too Low';
        guessValue = 0;
        return;
    } else if(guessValue === 1) {
        guessMore.textContent = 'Too High';
        guessValue = 0;
        return;
    } else if(guessValue === 0){
        guessMore.textContent = 'Correct';
        message.textContent = 'You Won!';
        numberInput.disabled = true;
        submitNumber.disabled = true;
    }
});

    


