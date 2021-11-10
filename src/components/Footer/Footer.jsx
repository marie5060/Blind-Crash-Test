import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <label htmlFor="email">
          Email :
          <input type="email" name="email" id="email" value="" />
        </label>
        <button type="submit">Partager votre score</button>
      </div>
    </footer>
  );
};

export default Footer;
