let suits = ['◆','♥️', '♣', '♠']
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

let warPile = [];

let cardsInPlayOne = [];
let cardsInPlayTwo = [];

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

class Board {
    constructor() {
        this.warPile = []
        this.cardsInPlayOne = []
        this.cardsInPlayTwo = []
        this.players = [new Player ("Player One"), new Player ("Player Two")]
        this.deck = new Deck ()
        this.deck.shuffle();
    } 
    deal = () => {    
        for (let i = 0; i < this.deck.length; i++) {
            if (i % 2 === 0) {
                this.players[0].hand.unshift(this.deck.cards[i])
            } else {
                this.players[1].hand.unshift(this.deck.cards[i])
            }
        }
        this.deck = []
    }
}

let gameBoard = new Board ()
gameBoard.deal()
