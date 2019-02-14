import React, { Component } from 'react';

//Presentational Component: Doesn't Care About State
class Poster extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="col s3 center">
                <h3>BARK</h3>
            </div>
        )
    }
}

export default Poster;