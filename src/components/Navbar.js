import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';

// Application NavBar component
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-black w-100%" style={{ height: '90px'}}>
      <div className="container-fluid">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 -960 960 960" fill="#ffffff"><path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z"/></svg>
        <Link className="navbar-brand text-white fw-bold" to={`/`}>
          La Maison
        </Link>
        </div>
        <div className="d-flex">
          <button className="btn navbar-btn">Sign In</button>
          <button className="btn navbar-btn">Log In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
