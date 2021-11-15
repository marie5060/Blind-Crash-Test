import { useState } from 'react';
import './Footer.css';
import Twitter from './Logos/Twitter.png';
import Facebook from './Logos/Facebook.png';
import Instagram from './Logos/Instagram.jpg';

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
        <button type="submit">Partager votre résultat</button>
        <div className="social">
          <a
            href="https://twitter.com/"
            className="twitter-button"
            data-show-count="false"
          >
            <img src={Twitter} alt="twitter" />
          </a>
          <a
            href="https://facebook.com/"
            className="facebook-button"
            data-show-count="false"
          >
            <img src={Facebook} alt="facebook" />
          </a>
          <a
            href="https://instagram.com/"
            className="instagram-button"
            data-show-count="false"
          >
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
