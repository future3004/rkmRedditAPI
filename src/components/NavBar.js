import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a  className="brand-logo">RKM APP</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/how-to">How To Use</Link></li>
            </ul>
          </div>
       </nav>

     </div>
    );
  }
}

export default NavBar;
