import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const ReservedRockets = ({
  rockets,
}) => (
  <p style={{ width: '40rem' }}>
    <ListGroup>
      {rockets.map(({ id, rocketName }) => (
        <ListGroup.Item key={id}>{rocketName}</ListGroup.Item>
      ))}
    </ListGroup>
  </p>
);

ReservedRockets.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rocketName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      flickrImage: PropTypes.string.isRequired,
      reserved: PropTypes.bool,
    }).isRequired,
  ).isRequired,
};

export default ReservedRockets;
