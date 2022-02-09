import React from 'react';
import { useTranslation } from 'react-i18next';

import Fade from 'react-reveal/Fade';

export default function End() {
  const { t } = useTranslation();

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: '#cbe6ef', color: 'white', paddingBottom: 30 }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h1 className="text-center my-5" style={{ color: 'black' }}>
              {t('Contact us')}
            </h1>
            <div className="row my-4">
              <div className="col-lg-6 mb-4">
                <input
                  type="name"
                  className="inputBox"
                  placeholder={t('Your Name')}
                />
              </div>
              <div className="col-lg-6 mb-4">
                <input
                  type="email"
                  className="inputBox"
                  placeholder={t('Your Email')}
                />
              </div>
            </div>
            <textarea
              rows="2"
              className="inputBox mb-4"
              placeholder={t('Your Message')}
            />
            <button className="btn btn-light mb-4 py-3" type="submit">
              {t('Submit')}
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
}
