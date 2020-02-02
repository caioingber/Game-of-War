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
        this.cardsInPlay = []
    }
}

class Deck {
    constructor () {
        this.suit = ['◆','♥️', '♣', '♠']
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
    //Fisher-Yates algorithm
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
    }
    flipCards() {
        this.players[0].cardsInPlay.unshift(this.players[0].hand[0]);
        this.players[0].hand.shift();
        this.players[1].cardsInPlay.unshift(this.players[1].hand[0]);
        this.players[1].hand.shift();
        console.log(`${this.players[0].name} flipped ${this.players[0].cardsInPlay[0].rank} of ${this.players[0].cardsInPlay[0].suit}\n\n${this.players[1].name} flipped ${this.players[1].cardsInPlay[0].rank} of ${this.players[1].cardsInPlay[0].suit}`)
        this.compareRank();
    }
    collectWinnings(a,b) {
        this.players[a].hand.push(...this.warPile);
        this.players[a].hand.push(...this.players[a].cardsInPlay, ...this.players[b].cardsInPlay);
        this.players[a].cardsInPlay = []
        this.players[b].cardsInPlay = []
        this.warPile = [];
        console.log(`${this.players[a].name} wins Round ${this.round}! \n\n  ${this.players[a].name}: ${this.players[a].hand.length} Cards \n  ${this.players[b].name}: ${this.players[b].hand.length} cards`)
        this.checkGame()
    }
    compareRank() {
        if (this.players[0].cardsInPlay[0].score > this.players[1].cardsInPlay[0].score) {
            this.collectWinnings(0,1);
        } else if (this.players[0].cardsInPlay[0].score < this.players[1].cardsInPlay[0].score) {
            this.collectWinnings(1,0)
        } else {
            if (this.players[0].hand.length === 0) {
                this.winnerMessage(this.players[1].name)
            } else if (this.players[1].hand.length === 0) {
                this.winnerMessage(this.players[0].name)
            } else {
            this.startWar();
        }
    }
}
    
    checkGame() {
        if (this.players[0].hand.length === 0) {
            this.winnerMessage(this.players[1].name)
        } else if (this.players[1].hand.length === 0) {
            this.winnerMessage(this.players[0].name)
        } else {
            this.startRound();
        }
    }

    winnerMessage(player) {
        console.log(`Congratulations, ${player}!\n\n You've won the battle, but have you won the war?\n\n Click on 'New Game' to find out!`)
    }

    startWar() {
        // if (this.players[0].hand.length < 4) {
        //     this.winnerMessage(this.players[1].name)
        // } else if (this.players[1].hand.length < 4) {
        //     this.winnerMessage(this.players[0].name)
        // } else {
            for (let i = 0; i < 3; i++) {
                if (i >= this.players[0].hand.length - 1){
                } else{
                    this.warPile.unshift(this.players[0].hand[0]);
                    this.players[0].hand.shift()
                }
            }   
            for (let i = 0; i < 3; i++) {
                if (i >= this.players[1].hand.length - 1){
                } else{
                    this.warPile.unshift(this.players[1].hand[0]);
                    this.players[1].hand.shift()
                }
            }
            console.log("I\nDe-\nclare\nWar!");
            this.flipCards();
        }
}

let game = new Game()
game.deal()


newGame = () => {
    game.deck = new Deck();
    game.players[0].hand = [];
    game.players[1].hand = [];
    game.warPile = [];
    game.players[0].cardsInPlay = [];
    game.players[1].cardsInPlay = [];
    game.round = 0;
    game.deck.shuffle();
    game.deal();
 }
document.getElementById("button").addEventListener("click", newGame)