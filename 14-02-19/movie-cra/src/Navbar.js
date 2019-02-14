import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo center">MovieApp</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;