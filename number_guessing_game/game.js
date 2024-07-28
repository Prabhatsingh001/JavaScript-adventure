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
    if(guess==='' ||   isNaN(guess)){
        alert('please enter a number');
    }else if(guess<1){
        alert('please enter a number greater than 1');
    }else if(guess>100){
        alert('please enter a number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMsg(`game over. random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg("you guesses right");
    }else if(guess < randomNumber){
        displayMsg("number is too low");
    }else if(guess > randomNumber){
        displayMsg("number id too high");
    }
}

function displayGuess(guess){
    userInput.value = '';
    userGuess.innerHTML += `${guess}`
    numGuess++;
    lastresult.innerHTML = `${11-numGuess}`
}

function displayMsg(msg){
    low_or_hi.innerHTML = `<h2>${msg}</h2>`
}

function newGame(){
    // 
}

function endGame(){
    // 
}

