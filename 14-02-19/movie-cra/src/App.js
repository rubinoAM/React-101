import React, { Component } from 'react';
import Poster from './Poster';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  constructor(){ //We need a constructor in order to use "this"
    super()
    this.state = {
      movieList:[]
    }
    this.movieSearch = this.movieSearch.bind(this);
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

  movieSearch(e){
    e.preventDefault();
    const movieTitle = document.getElementById('searchTerm').value;
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+movieTitle;
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then((myJson)=>{
        const results = myJson.results;
        this.setState({
            movieList: results
        });
    });
  }

  render() {
    const posters = this.state.movieList.map((movie,i)=>{
      return(<Poster key={i} movie={movie}/>);
    });

    return (
      <div>
        <Navbar />
        <div className="container">
        <div className="row">
          <h1>Movie App- The Quickening</h1>
          <form onSubmit={this.movieSearch}> {/* No method or action because we won't leave this page */}
            <input id='searchTerm' type="text" placeholder="Movie Title"/>
            <button type="submit" className="btn waves-effect waves-dark">Search</button>
          </form>
          {posters}
        </div>
      </div>
      </div>
    );
  }
}

export default App;