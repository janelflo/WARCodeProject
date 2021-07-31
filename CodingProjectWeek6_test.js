var expect = chai.expect;

//calls shuffle deck then checks that the length of the deck is 52
describe("shuffleDeckFunction", function () {
	describe("#shuffleDeck", function () {
		it("should shuffle the deckOfCards and return 52 cards", function () {
			const testdeck = new Deck();
			testdeck.createDeck();
			testdeck.shuffleDeck();
			//console.log(testdeck.deckOfCards);
			expect(testdeck.deckOfCards).to.have.length(52);
		});
	});
});
