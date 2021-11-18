import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/"
            className="twitter-button"
            data-show-count="false"
          >
            <FaTwitter color="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com/"
            className="facebook-button"
            data-show-count="false"
          >
            <FaFacebook color="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/"
            className="instagram-button"
            data-show-count="false"
          >
            <FaInstagramSquare color="black" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
