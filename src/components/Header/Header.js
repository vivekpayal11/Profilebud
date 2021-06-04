import React from "react";
import Group7 from "./../assets/images/Group7.svg";
import Checkout7 from "./../assets/images/checkout-7.svg";
import "./../assets/css/header.css";

const Header = () => {
  return (
   
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Group7} className="logo" alt="Group7" />
        <button
          class="navbar-toggler"
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
            <li class="nav-item ">
              <a class="nav-link" href="#1">
                Usps
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#2">
                Pricing
              </a>
            </li>

            <li class="nav-item">
              <img src={Checkout7} className="checkoutLogo" alt="Checkout7" />
            </li>
          </ul>
        </div>
      </nav>
   
  );
};

export default Header;
