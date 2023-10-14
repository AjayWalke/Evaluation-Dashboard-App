import React from 'react';
import '../../styles/styles.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>Ajay Walke</h1>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="https://github.com/AjayWalke">Github</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
