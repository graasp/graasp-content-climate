import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ServiceItem from '../components/ServiceItem';

function Services() {
  const { allServicesYaml } = useStaticQuery(graphql`
    {
      allServicesYaml {
        edges {
          node {
            simulation
          }
        }
      }
    }
  `);
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
          <h1 className="text-center my-5">Simulations</h1>
          <div className="row" style={{ width: '105%' }}>
            {allServicesYaml.edges.map(({ node }, index) => (
              <ServiceItem
                title={node.simulation[0]}
                description={node.simulation[1]}
                web={node.simulation[2]}
                github={node.simulation[3]}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              />
            ))}
          </div>
          <p style={{ fontSize: 12, marginTop: 24 }}>
            * Recommended pedagogical prerequisites: Concepts of electric
            charges, atoms, molecules, energy, and power
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
