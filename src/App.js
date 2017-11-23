import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Header from './Header.js'
import Home from './Home.js';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import BurgerList from './BurgerList.js';
import Authenticate from './Authenticate.js';


class App extends Component {

  constructor() {
    super();
    this.state = {
      burgers: [],
      userID: null,
      username: null
      
    }
  }

  updateAppState = update => {
    this.setState(update)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar
            userID={this.state.userID}
            updateUser={this.updateState}
          />
          {/* <Header> contains the FOOMENU sign and link to HOMEPAGE */}
          <Route path="/" render={() => <Header />} />

          {/* MID-CONTENT contains all the routed paths */}
          <div className="App-mid-content">

            <Route exact path="/" render={() => <Home />} />
            
            <Route path="/login" render={(routeProps) =>
              <Authenticate
                setUserID={this.updateAppState}
                userID={this.state.userID}
                username={this.state.username}
                routeProps={routeProps}
              />
            } />

            <Route exact path="/cheapest"
              render={() => (
                <BurgerList sortOrder={'price'}
                  appState={this.state} updateAppState={this.updateAppState}
                />
              )}
            />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
