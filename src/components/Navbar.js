import React from 'react'
import {Link} from 'react-router-dom'

// Component
import NavbarMobile from "./NavbarMobile";

    document.addEventListener("scroll", function () {
      //scrollBarActive();
    });

    function scrollBarActive() {
      const offsetTop = window.pageYOffset;
      const navBarDesktop = document.querySelector('nav.desktop');
      if (offsetTop >= 10) {
        navBarDesktop.classList.add("scrollBarActive");
      } else {
        navBarDesktop.classList.remove("scrollBarActive");
      }
    }

const Navbar = () => {
    return (
      <nav className="desktop">
        <div className="inner">
          <div className="navbar-wrap">
            <div className="navbar-item1">
              <Link to="/">
                <img
                  src="/images/logo.9a3d2645.svg"
                  alt=""
                  className="logo-navbar"
                />
              </Link>
            </div>
            <div className="navbar-item2">
              <ul className="ul-cleargap">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <NavbarMobile />
          </div>
        </div>
      </nav>
    );
}

export default Navbar
