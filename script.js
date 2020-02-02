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
let deck = [];

let suits = ['◆','♥️', '♣', '♠']
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

let warPile = [];
let playerOne = [];
let playerTwo = [];

let cardsInPlayOne = [];
let cardsInPlayTwo = [];

let round = 0;
// let warDeclared = false;

function startWar () {
    if (playerOne.length < 2) {
        winnerMessage("PlayerTwo")
    } else if (playerTwo.length < 2) {
        winnerMessage("PlayerOne")
    } else {
        for (let i = 0; i < 1; i++) {
            //conditional below for when player has less than 4 cards
            // if (i > playerOne.length - 1) {
            warPile.unshift(playerOne[0]);
            playerOne.shift();
            // }
        }   
        for (let i = 0; i < 1; i++) {
            // if (i > playerTwo.length - 1) {
            warPile.unshift(playerTwo[0]);
            playerTwo.shift(); 
            // }  
        }
        console.log("I\nDeclare\nWar!");
        flipCards();
        compareRank();
    }
 }

function compareRank() {
    if (cardsInPlayOne[0].rank > cardsInPlayTwo[0].rank) {
        //update push as playerOne.push(...cardsInPlayOne, ...cardsInPlayTwo)?
        //To account for when war is 
        playerOne.push(...cardsInPlayOne, ...cardsInPlayTwo);
        playerOne.push(...warPile);
        cardsInPlayOne = [];
        cardsInPlayTwo = [];
        warPile = [];
        console.log(`PlayerOne wins Round ${round}! \n\n  PlayerOne: ${playerOne.length} Cards \n  PlayerTwo: ${playerTwo.length} cards`)
        // warDeclared = false;
        checkGame();
    } else if (cardsInPlayOne[0].rank < cardsInPlayTwo[0].rank) {
        playerTwo.push(...cardsInPlayTwo, ...cardsInPlayOne);
        playerTwo.push(...warPile);
        cardsInPlayOne = [];
        cardsInPlayTwo = [];
        warPile = [];
        console.log(`PlayerTwo wins Round ${round}! \n\n  PlayerOne: ${playerOne.length} Cards \n  PlayerTwo: ${playerTwo.length} cards`)
        // warDeclared = false;
        checkGame();
    } else {
        // warDeclared = true;
        startWar();
    }
}


function startRound() {
    round += 1;
    flipCards();
    compareRank();
}

function winnerMessage(player) {
    console.log(`Congratulations, ${player}!\n\n You've won the battle, but have you won the war?\n\n Type 'newGame()' in the console to find out!`)
}

function checkGame() {
    if (playerOne.length === 0) {
        winnerMessage("PlayerTwo")
    } else if (playerTwo.length === 0) {
        winnerMessage("PlayerOne")
    } else {
        startRound();
    }
}

function flipCards() {
    cardsInPlayOne.unshift(playerOne[0]);
    playerOne.shift();
    cardsInPlayTwo.unshift(playerTwo[0]);
    playerTwo.shift();
    console.log(`PlayerOne flipped ${cardsInPlayOne[0].value} of ${cardsInPlayOne[0].suit}\n\nPlayerTwo flipped ${cardsInPlayTwo[0].value} of ${cardsInPlayTwo[0].suit}`)
}

function shuffle() {
    //Fisher-Yates Algorithm for shuffling
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let holder = deck[i];
        deck[i] = deck[j];
        deck[j] = holder;
    }
    for (let i = 0; i < deck.length; i++) {
        if (i % 2 === 0) {
            playerOne.unshift(deck[i])
        } else {
            playerTwo.unshift(deck[i])
        } 
    }
    startRound();
}

function createDeck () {
    for (i=0; i < suits.length; i++) {
        for (j=0; j < value.length; j++) {
            let card = {suit: suits[i], value: value[j], rank: j + 2};
            deck.push(card);
        }
    }
    return deck;
}

function newGame() {
    deck = [];
    playerOne = [];
    playerTwo = [];
    warPile = [];
    cardsInPlayOne = [];
    cardsInPlayTwo = [];
    round = 0;
    createDeck();
    shuffle();
}

createDeck();
shuffle();

document.getElementById("button").addEventListener("click", newGame)
// let POneCard;
// let PTwoCard;
// let roundWinner;
// let roundNumber = 0;

// let cardsInPlay = [];
// let warCards = [];

// function shuffle()

// function dealHands()
// function compareRank();