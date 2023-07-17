const cardArray= [
    {
        name:'blue',
        img:'blue.png'
    },
    {
        name:'black',
        img:'black.png'
    },
    {
        name:'red',
        img:'red.png'
    },
    {
        name:'brown',
        img:'brown.png'
    },
    {
        name:'pink',
        img:'pink.png'
    },
    {
        name:'purple',
        img:'purple.png'
    },
    {
        name:'yellow',
        img:'yellow.png'
    } ,
    {
        name:'blue',
        img:'blue.png'
    },
    {
        name:'black',
        img:'black.png'
    },
    {
        name:'red',
        img:'red.png'
    },
    {
        name:'brown',
        img:'brown.png'
    },
    {
        name:'pink',
        img:'pink.png'
    },
    {
        name:'purple',
        img:'purple.png'
    },
    {
        name:'yellow',
        img:'yellow.png'
    }
   
]
cardArray.sort(()=> 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen=[];
let cardsChosenId = [];
const cardsWon = [];
console.log(cardArray);





function createBoard(){

    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','green.png')
        card.setAttribute('class','Card')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard,)
        gridDisplay.append(card)
    }
}
createBoard()



function checkMatch() {

const cards = document.querySelectorAll('img')
const optionOneId = cardsChosenId[0]
const optionTwoId = cardsChosenId[1]
console.log(cards)
    console.log('check for match')
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','green.png')
        cards[optionTwoId].setAttribute('src','green.png')
    alert('they are the same cards')
    }

 if(cardsChosen[0] == cardsChosen[1]){
alert('You found a match!')
 cards[optionOneId].setAttribute('src','white.png')
 cards[optionTwoId].setAttribute('src','white.png')
 cards[optionOneId].removeEventListener('click', flipCard)
 cards[optionTwoId].removeEventListener('click', flipCard)
 cardsWon.push(cardsChosen)
 }
 else{
    cards[optionOneId].setAttribute('src','green.png')
    cards[optionTwoId].setAttribute('src','green.png')
    alert('oops! Try again')
}resultDisplay.textContent = cardsWon.length*10
 cardsChosen=[];
cardsChosenId=[];

if(cardsWon.length == cardArray.length/2){
resultDisplay.textContent = ' Congratulations! You found them all';
}
}



function flipCard(){

const cardId = this.getAttribute('data-id')
console.log(cardArray[cardId].name)
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
console.log('clicked',cardId, cardsChosen)
this.setAttribute('src', cardArray[cardId].img)
if(cardsChosen.length === 2){
 setTimeout(checkMatch, 500)
}
}