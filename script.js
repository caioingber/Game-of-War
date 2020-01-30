/* High Level Components
___________
-two 'players' --> two arrays of cards playerOne & playerTwo
-one main Deck --> 52 cards
-deck split evenly --> cards each player
-cards --> 13 card values, 13 cards ranks, 4 card suits

Game Setup
___________
Create deck (global) --> build a function to create the objects and push them into the deck array
    Shuffle --> randomize order of cards within deck array
Create hands (global)--> build empy arrays for each player to begin
Deal --> new function to alternate distributing cards from main deck to hands


Playing the Game
___________
If playerOne.length && playerTwo.length are both greater than 1, begin new round
Create a cardsInPlay array
Play new round --> remove one card from the top of the array ".pop()" for each player and flipCard face up
Compare ranks --> compare the ranks of each card in the cardsInPlay array
    if either Player's card outranks the other, player become roundWinner
    Print message "roundWinner + wins + roundNumber." "Cards played: pOneCard.attributes + pTwoCard.attributes"
    Both cards then go into the winning players array,
    Print message" PlayerOne now has playerOne.length cards, playerTwo now has playerTwo.length cards"
    if playerOneCard === playerTwoCard, play war (function must be declared globally), see below section for info


*/



let startDeck = [];

let suits = ['◆','♥️', '♣', '♠']
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

let playerOne = [];
let playerTwo = [];

let cardsInPlayOne = [];
let cardsInPlayTwo = [];

function playWar() {
    flipCards();
    flipCards();
    flipCards();
    flipCards();
}

function playRound() {
    flipCards();
    if (cardsInPlayOne[0].rank > cardsInPlayTwo[0].rank) {
        playerOne.push(cardsInPlayOne[0], cardsInPlayTwo[0]);
        cardsInPlayOne.pop();
        cardsInPlayTwo.pop();
    } else if (cardsInPlayOne[0].rank < cardsInPlayTwo[0].rank) {
        playerTwo.push(cardsInPlayOne[0], cardsInPlayTwo[0]);
        cardsInPlayOne.pop();
        cardsInPlayTwo.pop();
    } else {
        playWar();
    }
}

function flipCards() {
    cardsInPlayOne.unshift(playerOne[0]);
    playerOne.shift();
    console.log(`PlayerOne flipped ${cardsInPlayOne[0].value} of ${cardsInPlayOne[0].suit}`)
    cardsInPlayTwo.unshift(playerTwo[0]);
    playerTwo.shift();
    console.log(`PlayerOne flipped ${cardsInPlayTwo[0].value} of ${cardsInPlayTwo[0].suit}`)
}

function shuffle() {
    //Shuffle
    for (let i = startDeck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let holder = startDeck[i];
        startDeck[i] = startDeck[j];
        startDeck[j] = holder;
    }
    for (let i = 0; i < startDeck.length; i++) {
        if (i % 2 === 0) {
            playerOne.unshift(startDeck[i])
        } else {
            playerTwo.unshift(startDeck[i])
        } 
    }
    playRound();
}

function createDeck () {
    for (i=0; i < suits.length; i++) {
        for (j=0; j < value.length; j++) {
            let card = {suit: suits[i], value: value[j], rank: j + 2};
            startDeck.push(card);
        }
    }
    return startDeck;
}

createDeck();
shuffle();

// let POneCard;
// let PTwoCard;
// let roundWinner;
// let roundNumber = 0;

// let cardsInPlay = [];
// let warCards = [];

// function shuffle()

// function dealHands()
// function compareRank();

