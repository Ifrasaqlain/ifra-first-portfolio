import React from "react";
import { Link } from 'react-router-dom';

export default function Contact(props) {
  function Mailto({ email, children }) {
    return <a href={`mailto:${email}`}>{children}</a>;
  }

  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  return (
    <section className="page-section" id="contact">
      <title>Contact</title>
      <div className="container">
        <div className="text-center">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0 address-block">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <address className="small text-black-50">
                    <Link to="address">
                     209502,Farrkhabad, Uttar Pradesh, India
                    </Link>
                  </address>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <Mailto email="ifrasaqlain@.com">ifrasaqlain@.com</Mailto>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <Callto phone="+919369207063">+91 9369207063</Callto>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
