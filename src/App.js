import React, { Component } from 'react';
import Header from './Header.js'
import Home from './Home.js';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import BurgerList from './BurgerList.js'


class App extends Component {

  constructor() {
    super();
    this.state = {
      burgers: [],
    }
  }

  updateAppState = update => {
    this.setState(update)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Header> contains the FOOMENU sign and link to HOMEPAGE */}
          <Route path="/" render={() => <Header />} />

          {/* MID-CONTENT contains all the routed paths */}
          <div className="App-mid-content">

            <Route exact path="/" render={() => <Home />} />

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
