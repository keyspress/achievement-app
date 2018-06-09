import React, { Component } from 'react';
import { TrophyCase } from './TrophyCase';
import './trophyRoom.css';

class TrophyRoom extends Component {
  render() {
    return (
      <div className="trophy-room-container">
        <h1 className="trophy-room-header">Trophy Room Name</h1>
        <p>Description of Trophy Room</p>
        <TrophyCase />
      </div>
    );
  };
}; 

export default TrophyRoom;