import React from 'react';
import { PropTypes } from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const MissionsProfile = ({ name }) => (
  <ListGroup.Item>
    {' '}
    {name}
    {' '}
  </ListGroup.Item>
);

MissionsProfile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MissionsProfile;
