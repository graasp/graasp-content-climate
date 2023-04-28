import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceItem from '../components/ServiceItem';

function Services() {
  const { t, i18n } = useTranslation();

  // item id is necessary for standalone preview
  const qs = `?lang=${i18n.language}`;

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
              web={`https://apps.graasp.org/4b63857b-1bd9-44cf-a72d-4fb7ff531b13/latest/index.html${qs}`}
              github="https://github.com/graasp/graasp-app-radiating-charge"
            />
            <ServiceItem
              title={t('Thermal radiation')}
              description={t(
                'Thermal radiation emitted by a planetary surface',
              )}
              web={`https://apps.graasp.org/ff4d50d9-1370-4707-a460-02a041474579/latest/index.html${qs}`}
              github="https://github.com/graasp/graasp-app-thermal-radiation"
            />
            <ServiceItem
              title={t('Radiation absorption')}
              description={t('Interaction between radiation and gas molecules')}
              web={`https://apps.graasp.org/35288bda-d787-42f9-b5d6-110d689d0eda/latest/index.html${qs}`}
              github="https://github.com/graasp/graasp-app-radiation-absorption"
            />
            <ServiceItem
              title={t('Energy balance')}
              description={t(
                'Global model including radiation, greenhouse gases, clouds and ice',
              )}
              web={`https://apps.graasp.org/f61d6916-be33-4c63-b697-2c7b09a7b8e5/latest/index.html${qs}`}
              github="https://github.com/graasp/graasp-app-greenhouse-effect"
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
