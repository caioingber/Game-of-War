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
    Print message "roundWinner + wins + roundNumber. Cards played
    Both cards then go into the winning players array,
    if playerOneCard === playerTwoCard, play war (function must be declared globally), see below section for info




*/

let mainDeck = [];

let playerOne = [];
let playerTwo = [];

let POneCard;
let PTwoCard;
let roundWinner;
let roundNumber = 0;

let cardsInPlay = [];
let warCards = [];

function createDeck();

function shuffle();

function dealHands();
function compareRank();

