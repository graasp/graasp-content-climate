import React from 'react';

function Footer() {
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
              Supported by
            </div>
            <a
              href="https://www.credit-suisse.com/about-us/en/our-company/corporate-responsibility/economy-society/switzerland/jubilee-fund.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://user-images.githubusercontent.com/19311953/135832813-9d5aac85-2a5f-4c1e-8bb7-4ab6bc2259a9.png"
                alt="Credit Suisse Foundation"
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
            © Copyright{' '}
            <a href="https://graasp.org" target="_blank" rel="noreferrer">
              graasp.org
            </a>{' '}
            2021
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
