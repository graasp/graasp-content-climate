import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceItem from '../components/ServiceItem';

function Services() {
  const { t, i18n } = useTranslation();

  const lang = `?lang=${i18n.language}`;

  return (
    <div
      id="services"
      className="container-fluid"
      style={{ backgroundColor: '#035603', opacity: '0.7', color: 'white' }}
    >
      <div className="container">
        <div
          className="flexbox"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <h1 className="text-center my-5">{t('Simulations')}</h1>
          <div
            className="row"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '105%',
            }}
          >
            <ServiceItem
              title={t('Oscillating charge')}
              description={t(
                'Electromagnetic waves emitted by an oscillating charge',
              )}
              web={`https://apps.graasp.eu/5acb589d0d5d9464081c2d46/5fc795f6f254ade34781a368/latest/index.html${lang}`}
              github="https://github.com/graasp/graasp-app-radiating-charge"
            />
            <ServiceItem
              title={t('Thermal radiation')}
              description={t(
                'Thermal radiation emitted by a planetary surface',
              )}
              web={`https://apps.graasp.eu/5acb589d0d5d9464081c2d46/602bdf211db0d51cb392aeb9/latest/index.html${lang}`}
              github="https://github.com/graasp/graasp-app-thermal-radiation"
            />
            <ServiceItem
              title={t('Radiation absorption')}
              description={t('Interaction between radiation and gas molecules')}
              web={`https://apps.graasp.eu/5acb589d0d5d9464081c2d46/60546e814e95e95abdd404a9/latest/index.html${lang}`}
              github="https://github.com/graasp/graasp-app-radiation-absorption"
            />
          </div>
          <p style={{ fontSize: 12, marginTop: 24 }}>
            {t(
              '* Recommended pedagogical prerequisites: Concepts of electric charges, atoms, molecules, energy, and power',
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
