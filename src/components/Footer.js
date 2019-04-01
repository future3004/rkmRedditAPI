import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (

      <div>

        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">More Info</h5>
                <p className="grey-text text-lighten-4">A Richard Kalibbala Production.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Quick Links</h5>
                <ul>
                  <li><Link to="/" className="grey-text text-lighten-3" >Home</Link></li>
                  <li><Link to="/how-to" className="grey-text text-lighten-3" >How To Use</Link></li>
                  <li><Link to="/search" className="grey-text text-lighten-3" >Search Topic</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Richard Kalibbala
              <a
                        className="grey-text text-lighten-4 right App-link"
                        href="https://kalibbala.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit My Site here
              </a>
            </div>
          </div>
        </footer>

      </div>

    );
  }
}

export default Footer;
