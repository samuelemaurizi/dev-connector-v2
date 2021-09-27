import React from 'react';
import PropTypes from 'prop-types';

// UTILS
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, description },
}) => {
  return (
    <div>
      <h3>{school}</h3>
      <p>
        {formatDate(from)} - {to ? formatDate(to) : ' Now'}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
