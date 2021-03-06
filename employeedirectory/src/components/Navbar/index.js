import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-danger bg-dark">
      <Link className="navbar-brand" to="/Employee-Directory">
        Have You Seen My Employee?
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/Employee-Directory"
              className={
                window.location.pathname === "/Employee-Directory"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
