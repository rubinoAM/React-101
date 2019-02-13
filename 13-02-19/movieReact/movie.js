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
        .then(function(myJson) {
          console.log(myJson);
        });

        console.log("MOUNTED")
        this.setState({
            moviesToShow: [1]
        })
    }

    render(){
        console.log("RENDERED")
        return(
            <h1>BARK</h1>
        );
    };
}