import React, { Component } from 'react';

//Presentational Component: Doesn't Care About State
class Poster extends Component{
    //Since we aren't using "this", we don't need a constructor

    render(){
        const imagePath = `http://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;        
        const moviePath = `http://www.themoviedb.org/movie/${this.props.movie.id}`;
        const title = this.props.movie.title;

        return(
            <div className="col s3 center">
                <a href={moviePath}><img src={imagePath} alt={title}/></a>
                <div className="col s12"> {/* Keeps title at the bottom of the container */}
                    {title}
                </div>
            </div>
        )
    }
}

export default Poster;