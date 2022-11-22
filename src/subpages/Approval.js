import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../config/i18n/i18n';

const Approval = () => {
  const { t } = useTranslation();
  const { language } = i18n;

  return (
    <div
      className="container"
      style={{
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div className="my-4 mr-4">
        {language === 'fr' ? (
          <StaticImage
            src="../images/Logo-IYBSSD-FR.png"
            alt="IYBSSD logo"
            className="iybssd-logo"
            layout="constrained"
          />
        ) : (
          <StaticImage
            src="../images/Logo-IYBSSD-English.png"
            alt="IYBSSD logo"
            className="iybssd-logo"
            layout="constrained"
          />
        )}
      </div>
      <div className="my-4">
        {t(
          'Approved by the International Year of Basic Sciences for Sustainable Development 2022',
        )}
      </div>
    </div>
  );
};

export default Approval;
