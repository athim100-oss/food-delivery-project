import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          {/* LOGO */}
          <Link className="navbar-brand fw-bold fs-1" to="/">
            <span className="nav-color">Cater</span>
            <span className="text-dark">Serv</span>
          </Link>

          {/* NAVIGATION */}
          <div
            className="collapse navbar-collapse fs-4 fw-bold gap-5"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/abouts" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/event" className="nav-link">
                  Event
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>

            {/* BOOK NOW */}
            <div className="d-flex align-items-center fs-1 gap-3">
              <Link to="/menu">
                <button className="nav-button rounded-pill p-3 fw-bold fs-4">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
