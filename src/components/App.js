import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import { connect } from 'react-redux';

const App = () => (
    <>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
)

export default (App);