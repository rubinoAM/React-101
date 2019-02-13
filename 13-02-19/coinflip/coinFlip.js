class CoinFlip extends React.Component{
    constructor(props){
        //This is a child class. It's a child of React.Component, so we need to use super to get all of React.Component's cool stuff!
        super(props);
        //React doesn't care about heads or tails... at all!
        this.heads = 'buffalo-nickel-heads.jpg';
        this.tails = 'buffalo-nickel-tails.png';
        this.coin = [heads,tails];
        this.state = {
            //React does care about state... a whole lot!
            image:this.coin[0]
        }
    }

    //local class method
    //EVERY class component must have a render. Without one your app will BREAK!
    render(){

    }
}