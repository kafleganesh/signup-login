import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Form from './Components/Form';
import './App.css';
import login from './Components/login';
import Navagation from './Components/Navagation';
// import Errorpath from './Components/Errorpath';

class App extends Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <div>
              <Navagation/>
                        <Switch>
                                <Route path = "/"  component= { Navagation }  exact/>
                                <Route path = "/login"  component= {login }/>
                                <Route path = "/Signup" component = { Form }/>
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
