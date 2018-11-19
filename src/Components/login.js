import React, { Component } from 'react';

class login extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <label className = "label-title">Username</label>
                <input></input><br></br>
                <label className = "label-title">Password</label>
                <input></input><br></br>
                <button>LogIn</button>
            </div>
         );
    }
}
 
export default login;