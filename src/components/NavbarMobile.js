import React from 'react'
import {Link} from 'react-router-dom'

const NavbarMobile = () => {

    document.addEventListener('DOMContentLoaded',function(){
       hamburgerMenuActive();
    })

    function hamburgerMenuActive() {
      const hamburgerMenu = document.querySelector(".hamburger-menu");
      const sidebarMenu = document.querySelector(".sidebar-menu");
      hamburgerMenu.addEventListener('click',function(){
        this.classList.toggle('active');
        if(hamburgerMenu.classList.contains('active')){
          sidebarMenu.classList.add('active');
        } else {
          sidebarMenu.classList.remove("active");
        }
      })
    }

    return (
      <>
        <div className="hamburger-menu">
          <div className="wrap-hamburger-menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        <div className="sidebar-menu">
          <div className="wrap-sidebar-menu">
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
        </div>
      </>
    );
}

export default NavbarMobile;
