import React, { Component } from 'react';
import logo from './logo.svg';
import pic from './max-van-den-oetelaar-unsplash.jpg';
import './App.css';
import Apicall from './api/Apicall';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div>

        <header className="App-header">
          <h1>Welcome to RKM-reddit API!</h1>
          <h3><Link to="/search">Search Your Favorite Reddit Topic</Link></h3>
        </header>

        <Footer />
    </div>

    );
  }
}

export default App;
