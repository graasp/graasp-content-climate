import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

function LandingPage() {
  const { t } = useTranslation();

  const pageStyle = {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1476546516825-6c911f1059e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundBlendMode: 'multiply',
  };

  return (
    <section id="home" style={pageStyle} className="container-fluid">
      <div className="container">
        <Navbar />
        <div className="centerItems">
          <h1 style={{ color: '#DCDCDC' }} className="landing-page-text">
            {t(
              'Active learning simulations for investigating the science of global warming',
            )}
          </h1>
          <p style={{ marginTop: '20px', fontSize: '20px' }}>
            {t(
              'Based on climate education research • Adapted for middle and high schools • Tested in classrooms • Easily embedded in Graasp activities and other web platforms',
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
