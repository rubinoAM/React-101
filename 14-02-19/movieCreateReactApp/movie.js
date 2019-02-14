//Not everything needs to be a class
//Classes should be used for things that will have their state change
function Poster(props){
    return(
        <div className="col s4 m3">
            <img src={props.image} />
        </div>
    );
}

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            moviesToShow: []
        }
    }

    //React calls this, but we don't
    componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then((myJson)=>{
            const results = myJson.results;
            //console.log(results);
            this.setState({
                moviesToShow: results
            })
        });

        //console.log("MOUNTED")
    }

    render(){
        const imagePath = "http://image.tmdb.org/t/p/w300";
        let movieList = this.state.moviesToShow.map((movie)=>{
            const fullImagePath = imagePath + movie.poster_path;
            return(<Poster image={fullImagePath} />);
        });
        //console.log(this.state.moviesToShow)
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {movieList}
                    </div>
                </div>
            </div>
        );
    };
}