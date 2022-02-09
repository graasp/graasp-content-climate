import React from 'react';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('Page Not Found')}</h1>
    </div>
  );
}

export default NotFound;
