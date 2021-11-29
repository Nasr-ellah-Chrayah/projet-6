var randomNumber = Math.floor(Math.random() * 10) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult')
var lowOrHigh = document.querySelector('.lowOrHigh')
var guessSubmit = document.querySelector('.guessSubmit')
var guessField = document.querySelector('.guessField')
var guessCount = 1;
var resetButton;

guessField.focus()

function checkguesses ()
    var userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = 'Previous'
    }
