//Pass Player Info into here
class Player {
	constructor(name) {
		this.playerName = name;
		this.playerCards = [];
		this.playerPoints = 0;
	}
}
//Created new Objects of the Player Class
const playerInfo = new Player();
const playerOne = new Player("Janel");
const playerTwo = new Player("Grammy");

class Card {
	constructor(rank, suit, value) {
		this.suit = suit;
		this.rank = rank;
		this.value = value;
	}
}

class Deck {
	constructor() {
		this.deckOfCards = [];
	}

	createDeck() {
		//Creating the deck results in 52 cards being pushed into the this.cards array.
		const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
		const ranks = [
			"Two",
			"Three",
			"Four",
			"Five",
			"Six",
			"Seven",
			"Eight",
			"Nine",
			"Ten",
			"Jack",
			"Queen",
			"King",
			"Ace",
		];
		const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
		//Nested Loop for creating Deck of Cards with assigned values
		for (let s = 0; s < suits.length; s++) {
			for (let r = 0; r < ranks.length; r++) {
				this.deckOfCards.push(new Card(ranks[r], suits[s], value[r]));
			}
		}
	}

	//Fisher-Yates Shuffle Algorithm
	shuffleDeck() {
		const deckShuffle = this.deckOfCards; //Create a variable for our Cards Array
		//Loop through the length of our array (i cannot be less then 0 because its the first index of an array, will decrement i)
		for (let i = deckShuffle.length - 1; i > 0; i--) {
			let x = Math.floor(Math.random() * i); //x is the var for the random index; floor gets rid of the decimal; random picks a number less than i, in our case i = 51 (length of array - 1)
			let tempArray = deckShuffle[i]; //Temp holding place for the iteration of the deck
			deckShuffle[i] = deckShuffle[x]; //Switching of index positions
			deckShuffle[x] = tempArray;
		}
	}

	dealDeck() {
		//Created a for loop that iterates through the 52 cards and gives a card to each player every other turn.
		for (let i = 0; i < 52; i += 2) {
			let dealCard1 = this.deckOfCards.pop();
			playerOne.playerCards.push(dealCard1);
			let dealCard2 = this.deckOfCards.pop();
			playerTwo.playerCards.push(dealCard2);
		}
	}
}

//Creating an Instance of the Deck Class
const deck = new Deck();

class Game {
	constructor() {
		this.playersOfGame = [];
	}

	//This function has all the steps of the game, in order
	startGame() {
		this.playersOfGame.push(playerOne);
		this.playersOfGame.push(playerTwo);
		deck.createDeck(); //Create a new Deck for the Game
		deck.shuffleDeck(); //shuffle
		//console.log(deck.deckOfCards);
		deck.dealDeck(); //Deal
		//console.log(playerOne.playerCards);
		//console.log(playerTwo.playerCards);
		this.eachRound();
		this.finalScore();
	}

	eachRound() {
		for (let round = 0; round < 26; round++) {
			let playedCard1 = playerOne.playerCards.pop();
			let playedCard2 = playerTwo.playerCards.pop();
			console.log(
				`ROUND ${round + 1}: ${playerOne.playerName} has a ${
					playedCard1.rank
				} of ${playedCard1.suit} and ${playerTwo.playerName} has a ${
					playedCard2.rank
				} of ${playedCard2.suit}`
			);
			if (playedCard1.value > playedCard2.value) {
				playerOne.playerPoints += 1;
				playerTwo.playerPoints == 0;
				console.log(
					`${playerOne.playerName} is the winner of this round!`
				);
			} else if (playedCard1.value < playedCard2.value) {
				playerOne.playerPoints == 0;
				playerTwo.playerPoints += 1;
				console.log(
					`${playerTwo.playerName} is the winner of this round!`
				);
			} else if (playedCard1.value == playedCard2.value) {
				playerOne.playerPoints == 0;
				playerTwo.playerPoints == 0;
				console.log(
					`${playerOne.playerName} and ${playerTwo.playerName} have a tie this round!`
				);
			}
		}
	}

	finalScore() {
		let displayFinalScore1 = playerOne.playerPoints;
		let displayFinalScore2 = playerTwo.playerPoints;
		console.log(
			`FINAL SCORE: ${playerOne.playerName} final score is ${displayFinalScore1} and ${playerTwo.playerName} final score is ${displayFinalScore2}`
		);
		if (playerOne.playerPoints > playerTwo.playerPoints) {
			console.log(`${playerOne.playerName} IS THE WINNER OF THE GAME!`);
		} else if (playerOne.playerPoints < playerTwo.playerPoints) {
			console.log(`${playerTwo.playerName} IS THE WINNER OF THE GAME!`);
		} else {
			console.log("THE GAME IS TIED!");
		}
	}
}

//Start the Game Here
let newGame = new Game();
newGame.startGame();

//Used to make sure the game was passing into the Player Object Correctly
//console.log(newGame.playersOfGame);
