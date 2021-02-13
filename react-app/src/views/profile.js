import React from "react";

import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user } = useAuth0();

  const namespace = 'https://example.com/';
  const flagURI = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/';
  const countryName = user[namespace + 'country_name'];
  const countryCode = user[namespace + 'country_code'];
  const flagPhoto = flagURI + countryCode + '.svg';

 console.log(countryCode)
  const { name, picture, email  } = user;
  return (
    <div>
      <div className="row align-items-center profile-header">
      <div className="col-md-2 mb-3">
          <img
            src={flagPhoto}
            alt={countryName}
            className="img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
       <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div>{user.namespace}</div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;