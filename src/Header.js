import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div className="App-header">
        <h1><Link to='/' className='linkStyle'>Foomenu</Link></h1>
      </div>
    );
  }

}

export default Header;