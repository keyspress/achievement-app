import React, { Component } from 'react';
import { TrophyCase } from './TrophyCase';
import { TrophyCaseList } from './TrophyCaseList';
import { trophyRoomContainer} from './styles/trophy-room-style';

class TrophyRoom extends Component {


  render() {
    const { view } = this.props;

    return (
      <div style={trophyRoomContainer}>
        <h1>Trophy Room Name</h1>
        <ul>
          <li>Add a Trophy Case</li>
          <li>Edit or Remove a Trophy Case</li>
        </ul>
        <p>Description of Trophy Room</p>
        {view === 'room' ? <TrophyCaseList /> : <TrophyCase />}
      </div>
    );
  };
}; 

export default TrophyRoom;