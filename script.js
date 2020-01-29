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

let suits = ['◆','❥', '♣', '♠']
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

let playerOne = [];
let playerTwo = [];
let cardsInPlayOne = [];
let cardsInPlayTwo = [];

function createDeck () {
    for (i=0; i < suits.length; i++) {
        for (j=0; j < values.length; j++) {
            let card = {suit: suits[i], values: values[j], rank: j + 1};
            startDeck.push(card);
        }
    }
    return startDeck;
}

function playWar() {
    flipCards();
    flipCards();
    flipCards();
    flipCards();

}

function playRound() {
    flipCards();
    if (cardsInPlay[0].rank > cardsInPlay[1].rank) {
        playerOne.push(cardsInPlay[0], cardsInPlay[1]);
        cardsInPlay.pop();
        cardsInPlay.pop();
    } else if (cardsInPlay[0].rank < cardsInPlay[1].rank) {
        playerTwo.push(cardsInPlay[0], cardsInPlay[1]);
        cardsInPlay.pop();
        cardsInPlay.pop();
    } else {
        playWar();
    }
}

function flipCards () {
    cardsInPlayOne.unshift(playerOne[0]);
    shift.playerOne;
    cardsInPlayTwo.unshift(playerTwo[0]);
    shift.playerTwo;
}

// let POneCard;
// let PTwoCard;
// let roundWinner;
// let roundNumber = 0;

// let cardsInPlay = [];
// let warCards = [];

// function shuffle()

// function dealHands()
// function compareRank();

