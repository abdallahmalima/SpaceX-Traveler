import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { cancelReservation, reserveRocket } from '../../redux/rockets/rocketsSlice';
import rocketStyles from './rocket.module.css';

const Rocket = ({
  rocket: {
    id, rocketName, description, flickrImage, reserved,
  },
}) => {
  const dispatch = useDispatch();
  const showToastr = (msg) => {
    toast(msg, {
      type: 'success',
    });
  };

  const handleReservation = (id) => {
    if (!reserved) {
      dispatch(reserveRocket(id));
      showToastr('The rocket was reserved successfully.');
    } else {
      dispatch(cancelReservation(id));
      showToastr('The reservation was cancelled successfully.');
    }
  };

  return (
    <main className={rocketStyles.rocketCard}>

      <img src={flickrImage} className={rocketStyles.img} alt="Rocket" />
      <div className={rocketStyles.details}>
        <h4>{rocketName}</h4>
        <p>
          {reserved && <span className={rocketStyles.reserved}>Reserved</span>}
          {description}
        </p>
        <button className={!reserved ? rocketStyles.btn : rocketStyles.btnCanceled} type="button" onClick={() => handleReservation(id)}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </main>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImage: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
