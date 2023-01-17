import React from 'react';
import {socialMedia} from './Pages/data';
import {Link} from 'react-router-dom';

export default function Footer(props) {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
          <div className="col-lg-4 my-3 my-lg-0">
            {socialMedia.map((socialMedia) => (
             <a className="btn btn-dark btn-social mx-2" target="_blank" href={socialMedia.iconURL} aria-label={socialMedia.ariaLabel}>
             <i className={socialMedia.iconName}></i>
            </a>
            ))}
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link className="link-dark text-decoration-none me-3" to="privacy">Privacy Policy</Link>
            <Link className="link-dark text-decoration-none" to="terms">Terms Of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}