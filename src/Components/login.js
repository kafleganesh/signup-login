import React, { Component } from 'react';


var getInfo = (e) => {
    console.log('i am in getinfo function');
     const username = e.target.elements.username.value;
     const password = e.target.elements.password.value;
     
  //Display all the entered valus in console
     console.log( username);
     console.log(password);
   
        e.preventDefault();
   }
   
class login extends Component {
    
    render() { 
        return ( 
            <div className = "container">
                <div className = "row">
                    <div className = "col-sm-6 background-title">
                        <h1>Welcome to login </h1>
                    </div>
                    <div className = "col-sm-6 signup-form">
                         <form onSubmit = {getInfo}>
                                <label className = "label-title">Username</label>
                                <input type = "test" name = "username"></input><br></br>
                                <label className = "label-title">Password</label>
                                <input type = "password" name = "password"></input><br></br>
                                <button className = "btn btn-primary">LogIn</button>
                         </form>
                       
                    </div>
            
            </div>
                
            </div>
         );
    }
}
 
export default login;