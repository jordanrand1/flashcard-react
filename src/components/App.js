import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import { connect } from 'react-redux';

const App = () => (
    <div>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      </Switch>
    </div>
)

const mapStateToProps = (state) => {
  return { state: state }
}

export default connect(mapStateToProps)(App);