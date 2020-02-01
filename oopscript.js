let suits = ['◆','♥️', '♣', '♠']
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

let warPile = [];

let cardsInPlayOne = [];
let cardsInPlayTwo = [];

let round = 0;

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

    shuffle = (p1, p2) => {
        for (let i = this.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let holder = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = holder;
        }    
        for (let i = 0; i < this.length; i++) {
            if (i % 2 === 0) {
                p1.hand.unshift(this.cards[i])
            } else {
                p2.hand.unshift(this.cards[i])
            }
        }
    }
}

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




let deck =  new Deck ()
let playerOne = new Player ("Player One")
let playerTwo = new Player ("Player Two")
deck.shuffle(playerOne, playerTwo);