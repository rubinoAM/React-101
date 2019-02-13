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
        this.avatar = props.avatar;
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
    }

    render(){
        return(
            <div className="UserInfo">
                <Avatar src={this.props.avatar} alt={this.props.name} />
                <div className="UserInfo-name">
                    {this.props.name}
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
        // let curDate = new Date();
        // if(date == 'Today'){
        //     date = curDate.getDate();
        // } else if (date == 'Two days ago'){
        //     date = curDate.getDate();
        // }
    }

    render(){
        return(
            <div className="Comment-body">
                <h1>{this.commentHeading}</h1>
                <div className="Comment-text">
                    {this.text}
                </div>
                <div className="Comment-date">
                    {this.date}
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

function App(props){
    let comments = props.data.map((comment)=>{
        return(
            <div className="Comment">
                <UserInfo name={comment.author.name} avatar={comment.author.avatarUrl} />
                <CommentBody commentHeading={comment.commentHeading} text={comment.text} date={comment.date} />
                <Badges userBadge={comment.userBadge} />
            </div>
        );
    });

    return(
        comments
    );
}