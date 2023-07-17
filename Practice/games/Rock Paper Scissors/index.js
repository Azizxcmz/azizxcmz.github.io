const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let playerChoice;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) =>{
    playerChoice = e.target.id 
    playerChoiceDisplay.innerHTML = playerChoice
    setComputerChoice()
    getResult()
}));

 function setComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) + 1
 
 
 if(randomNumber===1){
    computerChoice='rock'
 }
 if(randomNumber===2){
    computerChoice='paper'
 }
 if(randomNumber===3){
    computerChoice='scissors'
 } computerChoiceDisplay.innerHTML = computerChoice;
 
};



function getResult(){

if (computerChoice===playerChoice){
    result='Draw!'   
}

if (computerChoice==='rock' && playerChoice==="paper"){
    result='You won!'
}

if (computerChoice==='rock' && playerChoice==="scissors"){
    result='You lost!'
}

if (computerChoice==='scissors' && playerChoice==="paper"){
    result='You lost!'
}

if (computerChoice==='scissors' && playerChoice==="rock"){
    result='You won!'
}

if (computerChoice==='paper' && playerChoice==="rock"){
    result='You lost!'
}

if (computerChoice==='paper' && playerChoice==="scissors"){
    result='You won!'
}

resultDisplay.innerHTML = result;
};
 