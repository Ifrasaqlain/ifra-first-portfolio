import React from 'react';
import Logo from './Logo.js';
import NavbarItems from './NavbarItems';
import { Link } from 'react-router-dom';



export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-inverse navbar-fixed-top" id="mainNav">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <Logo/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
               <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <NavbarItems />
            </div>
        </div>
    </nav>
  )
}
