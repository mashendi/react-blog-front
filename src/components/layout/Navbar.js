import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "../auth/Logout";
import { Link } from "react-router-dom";

function Nav() {
  const { loggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (loggedIn) {
      setUsername(Cookies.get("username"));
    }
  }, [username, loggedIn]);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              {loggedIn === true ? (
                <li className="nav-item">
                  <Link to={`${username}/posts`} className="nav-link">
                    My Posts
                  </Link>
                </li>
              ) : (
                <></>
              )}

              {loggedIn === false && (
                <>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </>
              )}

              {loggedIn === true ? (
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn btn-link"
                    id="navbarDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ outline: "none" }}
                  >
                    {username}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <LogoutBtn className="dropdown-item" />
                  </div>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
