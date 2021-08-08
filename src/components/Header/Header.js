import React from "react";
import Group7 from "./../assets/images/Group7.svg";
import Checkout7 from "./../assets/images/checkout-7.svg";
import "./../assets/css/header.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbarBg">
      <div className="logoDiv">
        <img src={Group7} className="logo" alt="Group7" />
      </div>
      <button
        class="navbar-toggler toogleButton"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item usps">
            <a class="nav-link navlinkfont" href="#1">
              Usps
            </a>
          </li>
          <li class="nav-item pricing">
            <a class="nav-link navlinkfont" href="#2">
              Pricing
            </a>
          </li>

          <li class="nav-item cart">
            <img src={Checkout7} className="checkoutLogo" alt="Checkout7" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
