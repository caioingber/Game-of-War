let round = 0;

class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
    }
}

class Deck {
    constructor () {
        this.suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
        this.score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        this.cards = []
        this.length = 52
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.rank.length; j++) {
                let card = new Card(this.suit[i], this.rank[j], this.score[j])
                this.cards.push(card)
            }
        }   
    }

    shuffle = () => {
        for (let i = this.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let holder = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = holder;
        }    
    }
}

class Game { 
    constructor() {
        this.round = 0
        this.warPile = []
        this.cardsInPlay = []
        this.players = [new Player ("Player One"), new Player ("Player Two")]
        this.deck = new Deck ()
        this.deck.shuffle();
    } 
    deal() {    
        for (let i = 0; i < this.deck.length; i++) {
            if (i % 2 === 0) {
                this.players[0].hand.unshift(this.deck.cards[i])
            } else {
                this.players[1].hand.unshift(this.deck.cards[i])
            }
        }
        this.deck = []
        this.startRound()
    }
    startRound() {
        this.round += 1;
        this.flipCards();
        this.compareRank();
    }
    flipCards() {
        this.cardsInPlay.unshift(this.players[0].hand[0]);
        this.players[0].hand.shift();
        this.cardsInPlay.unshift(this.players[1].hand[1]);
        this.players[1].hand.shift();
        console.log(`${this.players[0].name} flipped ${this.cardsInPlay[0].rank} of ${this.cardsInPlay[0].suit}\n\n${this.players[1].name} flipped ${this.cardsInPlay[1].rank} of ${this.cardsInPlay[1].suit}`)
    }
    collectWinnings(a,b) {
        this.players[a].hand.push(...this.cardsInPlay);
        this.players[b].hand.push(...this.warPile);
        this.cardsInPlay = []
        this.warPile = [];
        console.log(`${this.players[a].name} wins Round ${this.round}! \n\n  ${this.players[a].name}: ${this.players[a].hand.length} Cards \n  ${this.players[b].name}: ${this.players[b].hand.length} cards`)
        this.startRound()
    }
    compareRank() {
        if (this.cardsInPlay[0].score > this.cardsInPlay[1].score) {
            //update push as playerOne.push(...cardsInPlayOne, ...cardsInPlayTwo)?
            //To account for when war is 
            this.collectWinnings(0,1);
            // checkGame();
        } else if (this.cardsInPlay[0].score < this.cardsInPlay[1].score) {
            this.collectWinnings(1,0)
            // checkGame();
        } else {
            // startWar();
        }
    }
}

let game = new Game()
game.deal()