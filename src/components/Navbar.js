/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import i18n from '../config/i18n/i18n';

function Navbar() {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();

  return (
    <div className="pos-f-t" style={{ marginBottom: 10 }}>
      <nav className="navbar navbar-dark navbar-expand-md">
        <div className="logo-container">
          <StaticImage
            src="../images/logo1.png"
            alt="Graasp Climate logo"
            className="logo"
          />
          <h4 className="logo-text">GRAASP CLIMATE</h4>
        </div>
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
                  {t('Home')} <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#services">
                  {t('Simulations')}
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#team">
                  {t('Team')}
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
