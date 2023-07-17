const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const width = 9;
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');


console.log(squares)
let currentIndex = 76;
let timerId
let currentTime = 20;
let outComeTimerId


//moving frog
function moveFrog(e) {

    squares[currentIndex].classList.remove('frog')

    switch(e.key){
        case 'ArrowLeft':
            if(currentIndex % width !== 0)currentIndex -=1
            break;
        case 'ArrowRight':
            if(currentIndex % width < width - 1)currentIndex +=1
            break;
        case 'ArrowUp':
            if(currentIndex - width >=0)currentIndex -= width
            break;
        case 'ArrowDown':
            if(currentIndex + width < width * width)currentIndex += width
            break;
            
    }

    squares[currentIndex].classList.add('frog')
}




// Moving the elements
function autoMoveElements(){
    currentTime -= 0.5
    timeLeftDisplay.textContent = currentTime
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight))
    lose()
    win()
    }
    

    //Win-Lose Control
    function checkOutComes() {
        win()
        lose()
    }



    //Left logs
function moveLogLeft(logLeft) {
    switch(true) {
    case logLeft.classList.contains('l1'): 
    logLeft.classList.remove('l1')
    logLeft.classList.add('l2')
    break;

    case logLeft.classList.contains('l2'): 
    logLeft.classList.remove('l2')
    logLeft.classList.add('l3')
    break;

    case logLeft.classList.contains('l3'): 
    logLeft.classList.remove('l3')
    logLeft.classList.add('l4')
    break;

    case logLeft.classList.contains('l4'): 
    logLeft.classList.remove('l4')
    logLeft.classList.add('l5')
    break;

    case logLeft.classList.contains('l5'): 
    logLeft.classList.remove('l5')
    logLeft.classList.add('l1')
    break;
    }
}


    //Right logs
    function moveLogRight(logRight) {
        switch(true) {
        case logRight.classList.contains('l1'): 
        logRight.classList.remove('l1')
        logRight.classList.add('l5')
        break;
    
        case logRight.classList.contains('l2'): 
        logRight.classList.remove('l2')
        logRight.classList.add('l1')
        break;
    
        case logRight.classList.contains('l3'): 
        logRight.classList.remove('l3')
        logRight.classList.add('l2')
        break;
    
        case logRight.classList.contains('l4'): 
        logRight.classList.remove('l4')
        logRight.classList.add('l3')
        break;
    
        case logRight.classList.contains('l5'): 
        logRight.classList.remove('l5')
        logRight.classList.add('l4')
        break;
        }
    }



    //Right cars
    function moveCarRight(carRight) {
        switch(true) {
        case carRight.classList.contains('c1'): 
        carRight.classList.remove('c1')
        carRight.classList.add('c2')
        break;
    
        case carRight.classList.contains('c2'): 
        carRight.classList.remove('c2')
        carRight.classList.add('c3')
        break;
    
        case carRight.classList.contains('c3'): 
        carRight.classList.remove('c3')
        carRight.classList.add('c1')
        break;
        }
    }


    //Left cars
    function moveCarLeft(carLeft) {
        switch(true) {
        case carLeft.classList.contains('c1'): 
        carLeft.classList.remove('c1')
        carLeft.classList.add('c3')
        break;
    
        case carLeft.classList.contains('c2'): 
        carLeft.classList.remove('c2')
        carLeft.classList.add('c1')
        break;
    
        case carLeft.classList.contains('c3'): 
        carLeft.classList.remove('c3')
        carLeft.classList.add('c2')
        break;
        }
    }


    //Lose
    function lose() {
        if(squares[currentIndex].classList.contains('c1') ||
           squares[currentIndex].classList.contains('l4') ||
           squares[currentIndex].classList.contains('l5') ||
           currentTime <= 0
        ){
            resultDisplay.innerHTML = 'Nası kaybettin, Allahın kolsuzu'
            clearInterval(timerId)
            clearInterval(outComeTimerId)
            squares[currentIndex].classList.remove('frog')
            document.removeEventListener('keyup', moveFrog)
        } 
    }


    //Win
    function win() {
        if(squares[currentIndex].classList.contains('ending-block')) {
            resultDisplay.innerHTML = 'You Win!'
            clearInterval(timerId)
            clearInterval(outComeTimerId)
            document.removeEventListener('keyup', moveFrog)
        }
    }



    //Button click
startPauseButton.addEventListener('click',() => {
    if(timerId) {
        clearInterval(timerId)
        clearInterval(outComeTimerId)
        timerId = null
        outComeTimerId = null
        document.removeEventListener('keyup', moveFrog)
    }
     else {
        timerId = setInterval(autoMoveElements, 600)
        document.addEventListener('keyup', moveFrog)
        outComeTimerId = setInterval(checkOutComes, 50)
    }
});


