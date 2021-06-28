import './App.css';
import React from 'react';
import Login from './components/login';
import Registration from './components/registration';
import TypeHard from './components/typeHard';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

class App extends React.Component{
  render(){
    const { history } = this.props
    return (
      <div className="wrapper">
        <Switch>
            <Route history={history} exac path='/login' component={Login} />
            <Route history={history} path='/registration' component={Registration} />
            <Route history={history} path='/typehard' component={TypeHard} />
            <Redirect from='/' to='/login'/>
        </Switch>
      </div>
    )
  }
}

export default App;
