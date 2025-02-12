import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

// Footer component to display the footer content of the page
const Footer = () => {
  return (
    // Footer section with dark background
    <footer className="footer navbar-dark bg-black">
      <div className="container-fluid">
        {/* Container for the footer content */}
        <div className="footer-content d-flex flex-column align-items-center justify-content-center">
          
          {/* Footer Text with copyright */}
          <p className="footer-text text-white">
            © 2025 La Maison. All rights reserved.
          </p>

          {/* Button section for Privacy Policy and Terms of Service */}
          <div className="d-flex">
            {/* Privacy Policy Button */}
            <button className="btn footer-btn">
              Privacy Policy
            </button>

            {/* Terms of Service Button */}
            <button className="btn footer-btn">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
