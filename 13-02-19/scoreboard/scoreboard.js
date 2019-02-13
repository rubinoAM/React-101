function Header(props){
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );   
}

function Player(props){
    return(
        <div className="player">
            <div className="player-name">{props.name}</div>
            <div className="counter">
                <button className="minus waves-effect waves-light btn">-</button>
                <div className="player-score">0</div>
                <button className="plus waves-effect waves-light btn">+</button>
            </div>
        </div>
    );
}

function Application(props){     //All components MUST return a single DOM element
    return(
        <div className="container">
            <div className="row">
                <div className="col s6 s3-offset board">
                    <Header title={props.title}/>
                    <div className="players">
                        <Player name="Michael" />
                        <Player name="Jim" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const renderWhere = document.getElementById('root');

ReactDOM.render(
    <Application title="Ping Pong Championship" />,
    renderWhere
);