import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const ReservedRocket = ({
  rocket: {
    rocketName,
  },
}) => (
  <Card style={{ width: '40rem' }}>
    <ListGroup variant="flush">
      <ListGroup.Item>{rocketName}</ListGroup.Item>
    </ListGroup>
  </Card>
);

ReservedRocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default ReservedRocket;
