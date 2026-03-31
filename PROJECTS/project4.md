# Projects related to DOM
## project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 4
```javascript
    let randomNo=parseInt(Math.random()*100+1);


const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;
if (playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  //no string ,negative,more than limit
  if(isNaN(guess)){
  alert('Please enter a valid no.');
  }else if(guess<1){
    alert('Please enter a no. more than 1');
  }
  else if(guess>100){
    alert('Please enter a no. less than 100');
  }
  else{
    prevGuess.push(guess);
    if(numGuess===11){
    displayGuess(guess);
    displayMsg(`Game Over.Random number was ${randomNo}`);
    endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
1
};
function checkGuess(){
  //check random no is high low or equal
  if(guess===randomNo){
    displayMsg(`Wow! you guessed it right`);
    endGame();
  }
  else if(guess<randomNo){
    displayMsg(`Number is too low`);
  }
  else if(guess>randomNo){
    displayMsg(`Number is too high`);
  }
};

function displayGuess(){
userInput.value='';
guessSlot.innerHTML +=`${guess},      `;
numGuess++;
remaining.innerHTML=`${11-numGuess}`;
};
function displayMsg(message){
  //userValue=>empty
  //innerHTML=>guess
  //remaining=>decrease
  lowOrHi.innerHTML=`<h2>${message}</h2>`
};

function endGame(){
  userInput.value="";
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newgame">Start new game</h2>`
  startOver.appendChild(p);
  playGame=false;
  newGame();
}
function newGame(){
const newGameButtton=document.querySelector('#newGame');
newGameButtton.addEventListener('click',function(e){
      randomNo=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML="";
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
})
}

```