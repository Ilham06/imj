import Image from "next/image";
import React from "react";
import Logo from "../../public/logo_imj.png"

export default function Navbar() {
  return (
    <div>
      <header className="navigation">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-2 col-md-4">
                <div className="header-top-socials text-center text-lg-left text-md-left">
                  <a
                    href="https://www.facebook.com/themefisher"
                    target="_blank"
                  >
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="https://twitter.com/themefisher" target="_blank">
                    <i className="ti-twitter"></i>
                  </a>
                  <a href="https://github.com/themefisher/" target="_blank">
                    <i className="ti-github"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
                <div className="header-top-info">
                  <a href="tel:+23-345-67890">
                    Call Us : <span>+23-345-67890</span>
                  </a>
                  <a href="mailto:support@gmail.com">
                    <i className="fa fa-envelope mr-2"></i>
                    <span>support@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg py-4" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <Image src={Logo} width={80}></Image>
            </a>

            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span>
            </button>

            <div
              className="collapse navbar-collapse text-center"
              id="navbarsExample09"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="project.html">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
