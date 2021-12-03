import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav class="container navbar navbar-expand-lg navbar-light bg-white shadow-md rounded-xl">
      <div class="container-fluid">
        <div>
          <img src="https://i.ibb.co/mTdNW94/logo.png" alt="" />
        </div>
        <p className="title ">Light OF Islam</p>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
                Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
                Get Schedule
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
                Contact
              </a>
            </li>
          </ul>
          <a href="#">
            <i className="fas fa-shopping-cart text-2xl pr-2 cart "></i>
          </a>
          <button className="btn-grad " type="submit">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
