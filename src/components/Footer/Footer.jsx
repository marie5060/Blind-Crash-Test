import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => setEmail(e.target.value);

  return (
    <footer className="footer">
      <div className="footer-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={handleEmailChange}
          value={email}
        />
        <button type="submit">Partager votre score</button>
      </div>
    </footer>
  );
};

export default Footer;
