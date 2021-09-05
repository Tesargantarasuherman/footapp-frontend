import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import FormLogin from './component/FormLogin';
import FormRegister from './component/FormRegister';
import Login from './pages/Login';
import Klasemen from './pages/Klasemen';
const App = () => {



  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-green">
            <Link className="navbar-brand font-white" to="/" >Footsal</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to='/turnamen'>Turnamen</Link>
              </div>
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to='/user'>User</Link>
              </div>
            </div>


          </nav>
          {/* LOGIN */}


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/sign" exact component={Login} />
              <Route path="/klasemen/:id" exact component={Klasemen} />
            </Switch>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
