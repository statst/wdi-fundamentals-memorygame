
const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}
];
const cardsInPlay=[];
cardsInPlay.push('cardsID');

const gameBoard=[];

function checkForMatch(){
	   let cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
 if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
 alert("Sorry, try again.");
}
//console.log(cards[cardId].cardImage);
}
function flipCard(){
	this.getAttribute('attribute-we-want-to-get-goes-here');
//console.log("User flipped " + cards[cardId].rank);
//console.log("User flipped " + cards[cardId].cardImage);
checkForMatch();
}
function createBoard(){
	for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
     cardElement.setAttribute('src', 'images/back.png');
     cardElement.setAttribute('data-id', i);
     //cardElement.addEventListener("click", flipCard);
     //document.getElementsByTagName('id').appendChild(cardElement);
     //cardElement.textContent='game-board';
     //cardElement.appendChild(".game-board");
     //document.getElementsByTagName('gameBoard')[i].appendChild(cardElement);
     document.getElementById("game-board").appendChild(cardElement); 
     cardElement.addEventListener("click", flipCard);
}
}
createBoard();
