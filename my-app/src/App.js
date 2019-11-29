import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import List from './pages/List';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/list/:name">
            <List />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
