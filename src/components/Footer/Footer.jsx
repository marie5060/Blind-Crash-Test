import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value=""
        />
        <button type="submit">Partager votre score</button>
      </div>
    </footer>
  );
};

export default Footer;
