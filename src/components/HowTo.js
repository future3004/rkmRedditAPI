import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class HowTo extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="container">
          <h3>How To Use</h3>
          <h5>Needed:</h5>
          <ul>
            <li>A Topic to search</li>
          </ul>

          <p>
            Type in a topic in the input field and hit SEARCH button to view the top trending activity of selected topic from Reddit
          </p>
        </div>

        <div className="SpaceDiv"></div>

       <Footer />
      </div>
    );
  }
}

export default HowTo;
