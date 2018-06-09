import React, { Component } from 'react';
import { TrophyCase } from './TrophyCase';

class TrophyRoom extends Component {
  render() {
    return (
      <div>
        <h1>Trophy Room Name</h1>
        <p>Description of Trophy Room</p>
        <TrophyCase />
      </div>
    );
  };
}; 

export default TrophyRoom;