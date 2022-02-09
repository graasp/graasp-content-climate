import React from 'react';
import { I18nextProvider } from 'react-i18next';
import Helmet from 'react-helmet';
import '../global.css';
import LandingPage from '../subpages/LandingPage';
import Services from '../subpages/Services';
import Team from '../subpages/Team';
import End from '../subpages/End';
import Footer from '../components/Footer';
import i18n from '../config/i18n/i18n';

function Index() {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <Helmet />
        <LandingPage />
        <Services />
        <Team />
        <End />
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default Index;
