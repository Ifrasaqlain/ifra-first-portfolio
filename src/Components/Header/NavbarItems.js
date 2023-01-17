import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
// import './script.js';

function NavbarItems() {
  return (
    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
    {/* <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li> */}
      <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/achievement">Achievement</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
    </ul>
  )
}

export default NavbarItems;