import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <div>
      { /*!this.props.history === '/' ? <Navbar/> : <div></div> */}
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </div>
  </Router>
)

export default App;