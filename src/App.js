import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Signup from './Components/SignUp'
import login from './Components/login';
import Navagation from './Components/Navagation';
import Dashboard from './Components/Dashboard';

class App extends Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <div>
              <Navagation/>
                        <Switch>
                                <Route path = "/"  component= { Dashboard }  exact/>
                                <Route path = "/login"  component= {login }/>
                                <Route path = "/Signup" component = { Signup }/>
                                {/* <Route   component= { Errorpath }/> */}
                        </Switch>      
          </div>
      </BrowserRouter>
        {/* <Form getInfo = {this.getInfo} /> */}      
      </div>
    );
  }
}
export default App;
