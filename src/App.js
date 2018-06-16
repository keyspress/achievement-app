import React, { Component } from 'react';
import { PageHeader } from './components/PageHeader';
import TrophyRoom from './components/TrophyRoom';
import { Footer } from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <TrophyRoom />
        <Footer />
      </div>
    );
  }
}

export default App;
