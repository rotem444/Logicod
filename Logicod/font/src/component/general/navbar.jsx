import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ status, name, email, handlerLogout }) => (
  <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
    <div className="container">
      <Link className="nav-item nav-link" to="/">
        LogiCod
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-item nav-link" exact to="/">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" exact to="/help">
              Help
            </NavLink>
          </li>
          {status !== "error" && (
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/examples">
                Examples
              </NavLink>
            </li>
          )}{" "}
          {(status === "admin" || status === "teacher") && (
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/edit/index">
                Edit
              </NavLink>
            </li>
          )}
          {status === "student" && (
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/homework">
                Homework
              </NavLink>
            </li>
          )}
        </ul>
        {status && (
          <ul className="navbar-nav ml-auto">
            {status === "guest" ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="/signin">
                    Signin
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="/signup">
                    Signup
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item" onClick={handlerLogout}>
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
