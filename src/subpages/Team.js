import React from 'react';

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
          <div className="row my-5">
            The simulations were designed and validated by Philippe Kobel and
            Thierry Gerez (Physics and Chemistry teachers at Gymnase du Bugnon),
            with the scientific collaboration of Stéphane Goyette (University of
            Geneva) and didactic support of Yves Debernardi and Nicolas Perrin
            (Haute École Pédagogique Vaud). The interaction design and
            implementation were carried out by Kim Lan Phan Hoang and Hagop
            Taminian from the Graasp team (École Polytechnique Fédérale de
            Lausanne and Graasp.org).
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
