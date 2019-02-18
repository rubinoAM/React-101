import React, {Component} from 'react';
import Deck from '../utilityClasses/Deck';
import GameButtons from './GameButtons';
import PokerHand from './PokerHand';

class PokerTable extends Component{
    constructor(){
        super();
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        //console.log(this.cards.deck);
        this.state = {
            playersHand:['deck','deck'],
            dealersHand:['deck','deck'],
            communityCard:['deck','deck','deck','deck','deck'],
            wager:0,
            bankroll:500,
        }
        this.prepDeck = this.prepDeck.bind(this);
        this.playerBet = this.playerBet.bind(this);
    }

    prepDeck(){
        this.cards.createDeck();
        this.cards.shuffleDeck();
        const card1 = this.cards.deck.shift();
        const card2 = this.cards.deck.shift();
        const card3 = this.cards.deck.shift();
        const card4 = this.cards.deck.shift();

        this.setState({
            playersHand: [card1,card3],
            dealersHand: [card2,card4],
        });
    }

    playerBet(n){   //Sent to GameButtons and updates player bet. After their bet we call draw.
        const newWager = this.state.wager + n;
        const newBankroll = this.state.bankroll - n;
        this.setState({
            wager:newWager,
            bankroll:newBankroll,
        });
        this.draw();
    }

    draw(){
        //We need Object.assign() to make a separate copy of state
        //You can also use {...arr} to do the same thing
        let communityNewHand = Object.assign([],this.state.communityCard);
        if(communityNewHand[0] == 'deck'){
            //First Draw -> Draw three cards
            communityNewHand = [this.cards.deck.shift(), this.cards.deck.shift(), this.cards.deck.shift()];
        }else{
            //Not First Draw -> Only draw one card
            communityNewHand.push(this.cards.deck.shift());
        }

        this.setState({
            communityCard: communityNewHand,
        });
    }

    render(){
        return(
            <div className="col-sm-12 the-table">
                <div className="row text-center">
                    <div className="col-sm-6">Current Wager: ${this.state.wager}</div>
                    <div className="col-sm-6">Current Bankroll: ${this.state.bankroll}</div>
                </div>
                <PokerHand cards={this.state.dealersHand} />
                <PokerHand cards={this.state.communityCard} />
                <PokerHand cards={this.state.playersHand} />
                <GameButtons dealFunction={this.prepDeck} betFunction={this.playerBet}/>
            </div>
        )
    }
}

export default PokerTable;