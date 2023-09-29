import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import AiFillGithub from '../images/github_icon.svg';
import BiWorld from '../images/link_icon.svg';

const ServiceItem = ({
  title, description, web, github,
}) => (
  <Fade bottom>
    <div className="col-lg-3 my-4 col-sm-12" style={{ textAlign: 'center' }}>
      <h4>
        <a
          href={web}
          className="appTitle"
          target="_blank"
          rel="noreferrer noopener"
        >
          {title}
        </a>
      </h4>
      <p style={{ color: 'white' }}>{description}</p>
      <div>
        <a
          href={web}
          style={{ color: 'white' }}
          target="_blank"
          rel="noreferrer"
        >
          <img alt={`${title} link`} src={BiWorld.src} width={24} style={{ marginRight: '2.5px' }} />
        </a>
        <a
          href={github}
          style={{ color: 'white' }}
          target="_blank"
          rel="noreferrer"
        >
          <img alt={`${title} github link`} src={AiFillGithub.src} width={24} style={{ marginLeft: '2.5px' }} />
        </a>
      </div>
    </div>
  </Fade>
);

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  web: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ServiceItem;
