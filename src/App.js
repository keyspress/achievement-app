import React, { Component } from 'react';
import { PageHeader } from './components/PageHeader';
import TrophyRoom from './components/TrophyRoom';
import { Footer } from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    user: '',
    view: 'room'
  }

  render() {
    return (
      <div className="App">
        <PageHeader />
        <TrophyRoom view={this.state.view}/>
        <Footer />
      </div>
    );
  }
}

export default App;
