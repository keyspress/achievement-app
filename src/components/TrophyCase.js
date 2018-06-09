import React from 'react';
import { Trophy } from './Trophy';
import './trophyCase.css';

export const TrophyCase = () => (
  <div className="trophy-case-container">
    <h2>Trophy Case Name</h2>
    <p>Description of Trophy Case</p>
    <Trophy />
    <Trophy />
  </div>
);