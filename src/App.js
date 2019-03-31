import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Apicall from './api/Apicall';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    <div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to RKM API!</h1>
        </header>

        <div className="main container App">
          <Apicall />
        </div>

        <Footer />
    </div>

    );
  }
}

export default App;
