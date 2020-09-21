import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Browse from '../Pages/Browse';
import CreateAccount from '../Pages/CreateAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/browse" component={Browse} />
      </div>
    </Router>
  );
}

export default App;
