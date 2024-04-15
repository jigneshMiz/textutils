import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleDarkMode } = useContext(ThemeContext);
  const isChecked = theme.color === 'white';

  return (
    <div style={theme}>
      <nav
        className={`navbar navbar-expand-lg ${isChecked ? 'navbar-dark bg-dark border-light' : 'navbar-light bg-light border-dark'
          }`}
        style={{ borderWidth: '1px', borderStyle: 'solid' }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Jignesh's
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active ${isChecked ? 'text-white' : 'text-dark'}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isChecked ? 'text-white' : 'text-dark'}`} to="/AboutUs">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <form className="d-flex me-2" role="search">
                <input
                  className={`form-control me-2 ${isChecked ? 'bg-dark text-white' : 'bg-light text-dark'}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className={`btn ${isChecked ? 'btn-outline-light' : 'btn-outline-dark'}`} type="submit">
                  Search
                </button>
              </form>
              <div className="form-check form-switch">
                <input
                  style={{ 'display': 'none' }}
                  className="form-check-input"
                  type="checkbox"
                  onChange={toggleDarkMode}
                  checked={isChecked}
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                  {isChecked ? (
                    <i className="fas fa-sun me-1" aria-hidden="true"></i>
                  ) : (
                    <i className="fas fa-moon me-1" aria-hidden="true"></i>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}