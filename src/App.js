import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './pages/Home';
import FormLogin from './component/FormLogin';
import FormRegister from './component/FormRegister';
import Login from './pages/Login';
import Klasemen from './pages/Klasemen';
import User from './pages/User';
import axios from 'axios';
import { withRouter } from 'react-router'
import { GoogleLogout } from 'react-google-login';
import Artikel from './pages/Artikel';
import DetailArtikel from './pages/DetailArtikel';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  logout = () => {
    let id = localStorage.getItem('id')
    axios.post(`http://localhost:8000/logout/${id}`).then(res => {
      localStorage.removeItem("id");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      window.location.reload();

    },
    )

  }


  render() {
    let id = localStorage.getItem('id')
    console.log('id', id)
    return (
      <div className="App">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-green d-flex justify-content-between ">
              <div className="container">
                <Link className="navbar-brand font-white" to="/" >Footsal</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse">
                  <div className="navbar-nav">
                    <Link className="nav-item nav-link" to='/user'>User</Link>
                  </div>
                  <div className="navbar-nav">
                    <Link className="nav-item nav-link" to='/artikel'>Artikel</Link>
                  </div>
                </div>
                <span class="navbar-text">
                  {id !== null ?
                    <GoogleLogout
                      clientId="862537460238-0suciho0vh9nr46070lvui80mlei8u9d.apps.googleusercontent.com"
                      buttonText="Logout"
                      onLogoutSuccess={this.logout}
                    >
                    </GoogleLogout> :
                    <Link className="btn btn-success text-light btn-sm" to="/sign">Login</Link>
                  }
                </span>
              </div>
            </nav>
            {/* LOGIN */}


            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Switch>
                <Route exact path="/user"  >
                  {id == null ? <Redirect push to="/sign" /> : <User />}
                </Route>
                <Route exact path="/sign"  >
                  {id !== null ? <Redirect push to="/" /> : <Login />}
                </Route>
                <Route path="/" exact component={Home} />
                <Route path="/klasemen/:id" exact component={Klasemen} />
                <Route path="/artikel" exact component={Artikel} />
                <Route path="/artikel/:id" exact component={DetailArtikel} />
              </Switch>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

