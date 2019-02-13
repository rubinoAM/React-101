var data = [
    {
        author:{
        avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
        name:"neo"
        },
        commentHeading: "I am the One.",
        text: "Humanity, relax. I will save you.",
        date: "Today",
        userBadge: [ 
        'Superman',
        'Herald',
        'Engineer'
        ]
    },
    {
        author:{
        avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
        name:"Morpheus"
        },
        commentHeading: "There is no spoon.",
        text: "Don't think you are. Know you are.",
        date: "Two days ago",
        userBadge: [ 
        'The man',
        'Bard',
        'Samurai swordsman'
        ]
    }
]

class Avatar extends React.Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.avatar = props.author.avatarUrl;
    }

    render(){
        return(
            <img className="Avatar" src={this.avatar} alt={this.name} />
        );
    }
}
 
class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.name = props.author.name;
    }

    render(){
        return(
            <div className="UserInfo">
                <Avatar src={props.author.avatarUrl} alt={this.name} />
                <div className="UserInfo-name">
                    {this.name}
                </div>
            </div>
        );
    }
}

class CommentBody extends React.Component{
    constructor(props){
        super(props);
        this.commentHeading = props.commentHeading;
        this.text = props.text;
        this.date = props.date;
    }

    formatDate(date){
        
    }

    render(){
        return(
            <div className="Comment-body">
                <h1>{this.commentHeading}</h1>
                <div className="Comment-text">
                    {this.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.date)}
                </div>
            </div>
        );
    }
}

class Badges extends React.Component{
    constructor(props){
        super(props);
        this.userBadge = props.userBadge;
    }

    render(){
        return(
            <div className="UserBadges">
                {this.userBadge.forEach((badge)=>{
                    <div className="badge">
                        {badge}
                    </div>
                })}
            </div>
        );
    }
}

function Comment(props){
    this.comments = props.map();

    return(
        this.comments.forEach(()=>{
            <div className="Comment">
                <UserInfo />
                <CommentBody />
                <Badges userBadge={props.userBadge}/>
            </div>
        })
    );
}