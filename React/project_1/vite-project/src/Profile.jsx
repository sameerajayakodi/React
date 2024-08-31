import PropTypes from 'prop-types';

import './profile.css';

export const Profile = ({name , city , position}) =>{
    return(
        <div className="profile">
        <h1>{name}</h1>
        <h2>{city}</h2>
        <h3>{position}</h3>
        </div>
    )
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };