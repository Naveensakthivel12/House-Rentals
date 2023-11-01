import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
  const logoStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  };

  const navbarStyle = {
    backgroundColor: '#3498db', // Background color
  };

  const brandStyle = {
    color: '#fff', // Brand text color
  };

  const toggleIconStyle = {
    backgroundColor: '#fff', // Hamburger icon background color
  };

  const linkStyle = {
    color: '#fff', // Link text color
    transition: 'color 0.3s', // Add a transition for smooth color change
  };

  const linkHoverStyle = {
    color: '#f39c12', // Color on hover
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container">
        <Link className="navbar-brand" to="/homepage" style={brandStyle}>
          <img
            src={logo}
            alt="Logo"
            style={logoStyle}
          />{' '}
          House Rentals
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={toggleIconStyle} />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/homepage" style={linkStyle}>
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/offers" style={linkStyle}>
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile" style={linkStyle}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
