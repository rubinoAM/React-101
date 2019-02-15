import React, {Component} from 'react';
import Deck from '../utilityClasses/Deck';
import GameButton from './GameButtons';

class PokerTable extends Component{
    constructor(){
        super();
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        console.log(this.cards.deck);
        this.state = {

        }
    }

    prepDeck(){
        
    }

    render(){
        return(
            <div className="col-sm-12 the-table">
                <GameButton />
            </div>
        )
    }
}

export default PokerTable;