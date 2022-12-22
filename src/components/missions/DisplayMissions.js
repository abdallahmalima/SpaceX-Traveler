import React from 'react';
import { PropTypes } from 'prop-types';

const DisplayMissions = (props) => {
  const {
    name, description, isReserved,
  } = props;

  return (
    <tr>
      <td>
        {' '}
        {name}
        {' '}
      </td>
      <td>
        {' '}
        {description}
        {' '}
      </td>
      {isReserved ? <td>MEMBER</td> : <td>NOT A MEMBER</td>}
      <td>
        <button
          className={(isReserved) ? 'red-btn-color' : 'btn-color-blue'}
          type="button"
        >
          {(isReserved) ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

DisplayMissions.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

export default DisplayMissions;
