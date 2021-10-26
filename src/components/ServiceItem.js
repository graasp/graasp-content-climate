import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { AiFillGithub } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

function ServiceItem({ title, description, web, github }) {
  return (
    <Fade bottom>
      <div className="col-lg-3 my-4 col-sm-12" style={{ textAlign: 'center' }}>
        <h4>{title}</h4>
        <p style={{ color: 'white' }}>{description}</p>
        <div>
          <a
            href={web}
            style={{ color: 'white' }}
            target="_blank"
            rel="noreferrer"
          >
            <BiWorld size={24} style={{ marginRight: '2.5px' }} />
          </a>
          <a
            href={github}
            style={{ color: 'white' }}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={24} style={{ marginLeft: '2.5px' }} />
          </a>
        </div>
      </div>
    </Fade>
  );
}

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  web: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ServiceItem;
