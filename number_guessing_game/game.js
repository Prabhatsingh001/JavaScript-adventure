const  randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuess = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastResult');
const low_or_hi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    // 
}

function checkGuess(guess){
    // 
}

function displayGuess(guess){
    // 
}

function displayMsg(msg){
    // 
}

function newGame(){
    // 
}

function endGame(){
    // 
}

