import React, { Component } from 'react';





var getInfo = (e) => {
    console.log('i am in getinfo function');
     const firstName = e.target.elements.firstName.value;
     const lastName = e.target.elements.lastName.value;
     const password = e.target.elements.password.value;
     const email = e.target.elements.email.value;


  
     console.log( firstName);
     console.log(lastName)
     console.log(password);
     console.log(email);
   
        e.preventDefault();
   }

const Form = () =>(
    <div className = "container">
                <div className = "row ">
                        <div className = "col-sm-6  background-title">
                                <h1>Welcome to Signup</h1>
                        </div>
    
                        <div className = "col-sm-6 signup-form">
                                <form  onSubmit = {getInfo}>   
                                        <label className = "label-title">First Name</label>
                                        <input type ="text" name="firstName"></input><br></br>
                                        <label className = "label-title">Last Name</label>
                                        <input type ="text" name="lastName"></input><br></br>
                                        <label className = "label-title">Email IDs</label>
                                        <input type="email" name="email"></input><br></br>
                                        <label className = "label-title">password</label>
                                        <input type ="password" name="password"></input><br></br>
                                        <button className = "btn btn-danger">Signup</button>      
                                </form>
                        </div>
                </div>  
    </div>    
);
export default Form;