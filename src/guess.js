const numberInput = document.getElementById('numberinput');
const submitNumber = document.getElementById('submitnumber');
const number = submitNumber.value;
const message = document.getElementById('message');
const actualNumber = 12;
let guessValue = 0;
let guessCounter = 3;

submitNumber.addEventListener("click", function() {
    guessCounter--;
    if(number > actualNumber) {
        guessValue++;
    } else if(number < actualNumber) {
        guessValue--;
    } else {
        guessValue = 0;
    }
});

if(guessCounter === 0) {
    numberInput.disabled = true;
    message.textContent = 'You Lose';
} else if(guessCounter > 0 && guessCounter < 3) {
    message.textContent = 'Keep Guessing';
};

if(guessValue >= 1) {
    message.textContent = 'Too High'; 
} else if(guessValue < 0) {
    message.textContent = 'Too Low';
} else {
    message.textContent = 'You Won!';
    numberInput.disabled = true;
}