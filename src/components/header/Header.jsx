import "./header.css";

import { NavLink } from "react-router";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <p>Oral's Blog</p>
          </div>
          <nav className="nav">
            <ul className="nav-items">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/articles" className="nav-link">
                  Articles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
