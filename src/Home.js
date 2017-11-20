import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="App-home-content">
        <div className="home-container">
          <Link className="btn" to="/cheapest">Cheapest burger</Link>
        </div>
      </div>
    );
  }

}

export default Home;
