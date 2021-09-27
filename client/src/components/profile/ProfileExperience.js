import React from 'react';
import PropTypes from 'prop-types';

// UTILS
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { company, title, location, from, to, description },
}) => {
  return (
    <div>
      <h3 className='text-dark'>{company}</h3>
      <p>
        {formatDate(from)} - {to ? formatDate(to) : ' Now'}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      <p>
        <strong>Location: </strong> {location}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
