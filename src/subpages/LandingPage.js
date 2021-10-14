import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navbar from '../components/Navbar';

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        landingText
        newFeatures
      }
    }
  `);

  const { landingText, newFeatures } = pageDataYaml;

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
          <h1 style={{ color: '#DCDCDC' }}>{landingText}</h1>
          <p style={{ marginTop: '20px', fontSize: '20px' }}>{newFeatures}</p>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
