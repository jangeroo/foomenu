import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentWillMount(){
    this.props.backBtnUpdate({backBtn: false});
  }

  render() {
    return (
      <div className="App-home-content">
        <div className="home-container">
          <Link className="btn" to="/cheapest">Bang for the buck</Link>
          <Link className="btn" to="/nearest">Nearest</Link>
          <Link className="btn" to="/best">Top Rated</Link>
          </div>
      </div>
    );
  }

}

export default Home;
