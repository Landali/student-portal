import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignUp from "./containers/signup";
import Layout from './containers/layout'
import CreateStudent from './containers/createstudent'
import ViewStudents from './containers/viewstudent'
import ViewDiploma from './containers/studentDiploma'
import PrivateRoute from './components/PrivateRoute'
class App extends Component {
  state = {
    user: {}
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Layout} />
                <Route exact path='/sign-up' component={SignUp} />
                <PrivateRoute exact path='/view-student' component={ViewStudents} />
                <PrivateRoute exact path='/create-student' component={CreateStudent} />
                <PrivateRoute path='/view-diploma/:id' component={ViewDiploma} />
              </Switch>
            </div>
          </div>
        </div></Router>
    )
  }
}

export default App;
