import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for footer styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Abdu. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/support">Customer Support</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;