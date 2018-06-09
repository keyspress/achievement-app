import React from 'react';
import './footer.css';

const date = new Date();
const year = date.getFullYear();
export const Footer = () => (
  <div className="footer-container">
    <p>© {year} Kyle Spresser</p>
  </div>
);