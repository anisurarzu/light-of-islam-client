import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, userInfo, logOut } = useAuth();
  return (
    <nav class=" container navbar-container navbar navbar-expand-lg navbar-light bg-white shadow-md rounded-xl ">
      <div class="container-fluid">
        <div>
          <Link to="/home">
            <img src="https://i.ibb.co/mTdNW94/logo.png" alt="" />
          </Link>
        </div>
        <Link to="/home">
          <p className="title ">দাওয়াহ টাইম
</p>
        </Link>
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 bangla-text">
            <li class="nav-item">
              <Link class="nav-link active " aria-current="page" to="/home">
                হোম
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                আমাদের সম্পর্কে
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link"
                to="/dashboard"
                tabindex="-1"
                aria-disabled="true"
              >
                ড্যাশবোর্ড
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/event"
                tabindex="-1"
                aria-disabled="true"
              >
                ইভেন্ট
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/service"
                tabindex="-1"
                aria-disabled="true"
              >
                সেবা সমূহ
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/contact"
                tabindex="-1"
                aria-disabled="true"
              >
                যোগাযোগ
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/quize"
                tabindex="-1"
                aria-disabled="true"
              >
                কুইজ
              </Link>
            </li>
          </ul>
          {user?.email && (
            <span className="user-details pl-8 text-gray-600">
              {user?.displayName}
            </span>
          )}
          {user?.email && (
            <div class="dropdown ">
              <button
                class="btn dropdown-toggle mx-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="w-8 h-8  rounded-full"
                  src={
                    user?.photoURL ||
                    userInfo?.image ||
                    "https://i.ibb.co/PFkN0mF/user.png"
                  }
                  alt=""
                />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link class="dropdown-item form-text" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item form-text" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <Link to="/cart">
            <i className="fas fa-shopping-cart text-2xl pr-4  cart "></i>
          </Link>
          <div>
            {user?.email ? (
              <button
                className="ml-8 text-sm pb-2 btn-donate text-white rounded-full  px-4 p-2 "
                onClick={logOut}
              >
                লগ আউট
              </button>
            ) : (
              <Link to="/login">
                <span className=" text-sm btn-donate text-white rounded-full  p-2 px-4">
                  লগ ইন
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
