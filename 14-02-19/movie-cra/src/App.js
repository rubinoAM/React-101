import React, { Component } from 'react';
import Poster from './Poster.js';
import './App.css';

class App extends Component {
  constructor(){ //We need a constructor in order to use "this"
    super()
    this.state = {
      movieList:[]
    }
  }

  componentDidMount(){
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then((myJson)=>{
        const results = myJson.results;
        this.setState({
            movieList: results
        })
    });
  }

  render() {
    const posters = this.state.movieList.map((movie,i)=>{
      return(<Poster key={i} movie={movie}/>);
    });

    return (
      <div className="container">
        <div className="row">
          <h1>Movie App- The Quickening</h1>
          {posters}
        </div>
      </div>
    );
  }
}

export default App;
