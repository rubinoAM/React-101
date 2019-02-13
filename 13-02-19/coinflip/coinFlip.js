class CoinFlip extends React.Component{
    constructor(props){
        //This is a child class. It's a child of React.Component, so we need to use super to get all of React.Component's cool stuff!
        super(props);
        //React doesn't care about heads or tails... at all!
        this.heads = 'images/buffalo-nickel-heads.jpg';
        this.tails = 'images/buffalo-nickel-tails.png';
        this.coin = [this.heads,this.tails];
        this.state = {
            //React does care about state... a whole lot!
            image:this.coin[0]
        };
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin(){
        // WE NEVER CHANGE/MUTATE STATE DIRECTLY! THAT'S REACT'S JOB!
        let coinSide = Math.round(Math.random());
        this.setState({
            image: this.coin[coinSide]
        });
    }

    //local class method
    //EVERY class component must have a render. Without one your app will BREAK!
    render(){
        //render() always runs after the constructor
        //Any time the state changes, render() is called
        return (
            <div className="coin-flip">
                {/* React events are camelcased and attached to the element, so you only pass them (not invoke them) */}
                <button className="waves-effect waves-light btn" onClick={this.flipCoin}>Flip!</button>
                <img src={this.state.image} />
            </div>
        );
    }
}