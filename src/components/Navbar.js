/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import i18n from '../config/i18n/i18n';

function Navbar() {
  const [language, setLanguage] = useState('en');

  const textStyle = {
    color: '#cdc3f3',
    fontWeight: '600',
    letterSpacing: '0.1em',
  };
  return (
    <div className="pos-f-t">
      <nav className="navbar navbar-dark navbar-expand-md">
        <h4 style={textStyle}>GRAASP CLIMATE</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbarSm"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="collapsingNavbarSm"
        >
          <div className="p-4">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <AnchorLink className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#services">
                  Simulations
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#team">
                  Team
                </AnchorLink>
              </li>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <li
                className="nav-item"
                onClick={() => {
                  if (language === 'en') {
                    i18n.changeLanguage('fr');
                    setLanguage('fr');
                  } else {
                    i18n.changeLanguage('en');
                    setLanguage('en');
                  }
                }}
              >
                <AnchorLink className="nav-link" href="#">
                  {language === 'en' ? 'FR' : 'EN'}
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
