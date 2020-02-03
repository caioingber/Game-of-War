# Game-of-War

## Introduction

For this project, I have created a console view version of the card game "War". For a tutorial on how to play the game, click [here](https://www.youtube.com/watch?v=23QQ1Hz2-jY).

## Development

This project served as a practice in my understanding of programming fundamentals: data types, loops, function, and object-oriented programming. I initially developed the game as a list of variables and functions executed in a computational. I then re-programmed the game utilizing an object-oriented approach. The game itself serves as the predominant object which contains players as well as the playing deck.

The final product serves as a game that plays through from start to finish in the developer console. After completing the game, I included a button element in the HTML with an attached event listener that allows the user to play through another game from start to finish. The first version is currently saved in this repository as 'script.js'. The object-oriented version is listed as 'oopscript.js' and is currently linked to the HTML file.

## Challenges

The initial challenge I encountered was efficiently setting up the skeleton of the game. The game consists of players, who each have their own deck and cards in play arrays, as well as a collection pile for 'war' cards. The methods I most commonly used for moving cards from one array to another were push/pop & unshift/shift. In future improvements to the game, I hope to implement more efficient methods, such as slice.

The most difficult component of the game was implementing the 'war' function of the game, as I included a variation that would ensure that both players have at least one card left to participate in 'war'. In order to do so, I utilized a loop nested inside a conditional that would only trigger so long as the player has more than one card in their hand (see below).

```Javascript

 for (let i = 0; i < 3; i++) {
                if (i >= this.players[0].hand.length - 1){
                } else{
                    this.warPile.unshift(this.players[0].hand[0]);
                    this.players[0].hand.shift()

```

## Contributions

I utilized the Fisher-Yates algorithm to shuffle the deck object after it's initial creation.

```Javascript
for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let holder = deck[i];
        deck[i] = deck[j];
        deck[j] = holder;
    }
```

I welcome any pull requests for recommendations or feedback on efficiencies.

## Built With

* JavaScript
* HTML
* CSS

## Acknowledgements

* My General Assembly Software Engineering instructors and peers for their helpful feedback and guidance