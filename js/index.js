let randomnumber= Math.floor(Math.random()*100)+1;
console.log(randomnumber)
const guesses= document.querySelector('.guesses');
const lastResult= document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');

const guessSubmit= document.querySelector('.guessSubmit');
const guessField= document.querySelector('.guessField');

let guesscount=1;
let resetButton;
////////////////////////////////////////////////////
function checkGuess(){
    const userGuess= Number(guessField.value);
    if(guesscount==1){
        guesses.textContent='Previous Guesses:';
    }
    guesses.textContent += userGuess + ' ';
    if(userGuess===randomnumber){
        console.log('in right')
       lastResult.textContent=' Congrats!! You got it right!';
       lastResult.style.backgroundColor='green';
       lowOrHi.textContent=' ';
       setGameOver();
    }
    else{
        lastResult.textContent='Wrong!';
        lastResult.style.backgroundColor='red';
        if(userGuess<randomnumber){
            lowOrHi.textContent='guess is too low!';
        }
        else if (userGuess>randomnumber){
            lowOrHi.textContent='guess is too high!';
        }
    }
    guesscount++;
    guessField.value= ' ';
    guessField.focus();
}
//////////////////////////////////////////////////
guessSubmit.addEventListener('click',checkGuess);
////////////////////////////
function setGameOver(){
    guessField.disabled= true;
    guessSubmit.disabled=true;
    resetButton=document.createElement('button');
    resetButton.textContent='Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}
////////////////////////////////////////////
function resetGame(){
    guesscount=1;
    const resetParas=document.querySelectorAll('.resultParas p');
    for(const resetPara of resetParas){
        resetPara.textContent=' ';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomnumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomnumber);
}