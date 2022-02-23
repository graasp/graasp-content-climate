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
import { useSiteMetadata } from '../hooks/use-site-metadata';
import favicon from '../images/favicon.png';

function Index() {
  const { title, description, author } = useSiteMetadata();

  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="author" content={author.name} />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />

          <link rel="icon" type="image/png" href={favicon} />
        </Helmet>
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
