import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <footer className="py-3" style={{ backgroundColor: '#00264a' }}>
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            color: 'white',
            fontSize: 14,
          }}
        >
          <div>
            <div style={{ fontWeight: 900, marginBottom: 7.5 }}>
              {t('Supported by')}
            </div>
            <a
              href="https://www.grstiftung.ch/en.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://user-images.githubusercontent.com/19311953/228587000-340207fa-6b6d-47b8-980b-a8f966d8eeef.png"
                alt="Gebert Rüf Stiftung"
                style={{ marginRight: 30 }}
              />
            </a>
            <a
              href="https://www.education21.ch/fr"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://user-images.githubusercontent.com/19311953/228587968-2a69698d-7719-4847-9387-e63fa80311ec.png"
                alt="Éducation 21"
                style={{ marginRight: 30 }}
              />
            </a>
            <a href="https://www.epfl.ch/" target="_blank" rel="noreferrer">
              <img
                src="https://user-images.githubusercontent.com/19311953/135830613-ef0d9d45-4279-4653-a5c8-74c24f45007c.png"
                alt="École Polytechnique Fédérale de Lausanne"
                style={{ marginRight: 30 }}
              />
            </a>
            <a
              href="https://www.hepl.ch/accueil.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://user-images.githubusercontent.com/19311953/135833080-23ec97d6-febc-4023-aa14-c1a820a4cda5.png"
                alt="Haute École Pédagogique Vaud"
              />
            </a>
          </div>
          <div>
            © {t('Copyright')}{' '}
            <a href="https://graasp.org" target="_blank" rel="noreferrer">
              graasp.org
            </a>{' '}
            {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
