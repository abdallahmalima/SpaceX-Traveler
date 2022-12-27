import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRockets from '../../redux/rockets/rocketsThunk';
import Rocket from './rocket';
import rocketStyles from './rocket.module.css';

const RocketList = () => {
  const { rockets, error, loading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, []);

  return (
    <main className={rocketStyles.container}>
      {loading && <h3 className="textError">Loading...</h3>}
      {error && <h3 className="textError">{error}</h3>}
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </main>
  );
};

export default RocketList;
