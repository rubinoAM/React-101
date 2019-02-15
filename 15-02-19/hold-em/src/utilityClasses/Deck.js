class Deck{
    constructor(){
        //We don't need to call super() since it's not a Component/extended from Component
        this.deck = [];
    }

    createDeck(){
        const suits = ['h','s','d','c'];
		for(let s = 0; s < suits.length; s++){
			for(let c = 1; c <= 13; c++){
				this.deck.push(c+suits[s]);
			}
		}
    }

    shuffleDeck(){
        for (let i = 0; i < 10000; i++){
			var rand1 = Math.floor(Math.random() * 52);
			var rand2 = Math.floor(Math.random() * 52);
			var temp = this.deck[rand1];
			this.deck[rand1] = this.deck[rand2];
			this.deck[rand2] = temp;
		}	
    }
}

export default Deck;