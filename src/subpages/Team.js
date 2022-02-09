import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function Team() {
  return (
    <div
      id="team"
      className="container-fluid"
      style={{ backgroundColor: '#c7f1bf' }}
    >
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Team</h1>
          <div className="my-5">
            The simulations were designed and validated by{' '}
            <a
              href="https://www.youtube.com/channel/UCWHwTr1dGYAzAFeMOfluwFg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Philippe Kobel
            </a>{' '}
            and{' '}
            <a
              href="http://gerez.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thierry Gerez
            </a>{' '}
            (Physics and Chemistry teachers at Gymnase du Bugnon), with the
            scientific collaboration of{' '}
            <a
              href="https://www.unige.ch/gap/nonlinear/people/goyette-stephane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stéphane Goyette
            </a>{' '}
            (University of Geneva) and didactic support of Yves Debernardi and{' '}
            <a
              href="https://www.hepl.ch/accueil/mission-et-organisation/organisation/unites-de-service/centre-de-soutien-e-learning/equipe-et-contacts/nicolas-perrin.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nicolas Perrin
            </a>{' '}
            (Haute École Pédagogique Vaud). The interaction design and
            implementation were carried out by{' '}
            <a
              href="https://www.linkedin.com/in/kim-lan-phan-hoang-a457bb130"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kim Lan Phan Hoang
            </a>{' '}
            and{' '}
            <a
              href="https://www.linkedin.com/in/hagopt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hagop Taminian
            </a>{' '}
            from the Graasp team (École Polytechnique Fédérale de Lausanne and
            Graasp.org).
          </div>
          <StaticImage
            src="../images/equipe.JPG"
            alt="Team photo"
            style={{ marginBottom: 50 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
