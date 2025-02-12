import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';

// Application Footer component
const Footer = () => {
  return (
    <footer className="footer navbar-dark bg-black">
      <div className="container-fluid">
        <div className="footer-content d-flex flex-column align-items-center justify-content-center">
          <p className="footer-text text-white">© 2025 La Maison. All rights reserved.</p>
          <div className="d-flex">
            <button className="btn footer-btn">Privacy Policy</button>
            <button className="btn footer-btn">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;