import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "container Navbar">
                <NavLink className = "Navbar-link" to = "/">Home</NavLink>
                <NavLink className = "Navbar-link" to = "/login">Login</NavLink>
                <NavLink className = "Navbar-link" to = "/signup">SignUp</NavLink>
            </div>
         );
    }
}
 
export default navigation;