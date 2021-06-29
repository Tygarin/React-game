import './App.css';
import React from 'react';
import Login from './components/login';
import Registration from './components/registration';
import TypeHard from './components/typeHard';
import Game from './components/game';
import Result from './components/result';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

class App extends React.Component{
  render(){
    const { history } = this.props
    return (
      <Router>
        <div className="wrapper">
          <Switch>
              <Route history={history} exac path='/login' component={Login} />
              <Route history={history} path='/registration' component={Registration} />
              <Route history={history} path='/typehard' component={TypeHard} />
              <Route history={history} path='/game' component={Game} />
              <Route history={history} path='/result' component={Result} />
              <Redirect from='/' to='/login'/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
