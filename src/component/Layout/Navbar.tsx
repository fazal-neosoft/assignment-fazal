/**
 * @author Fazal Iqubal
 */

import React from "react";
import { NavLink, Link } from "react-router-dom";

/**
 * @description Nav component.
 * Component used for Routing.
 */

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Web Portal
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/count">
                  Counter
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-outline-light" to="/users/add">
            Add Employee
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
