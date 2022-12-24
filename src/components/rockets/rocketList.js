import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRockets from '../../redux/rockets/rocketsThunk';
import Rocket from './rocket';
import rocketStyles from './rocket.module.css';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const errorMessage = useSelector((state) => state.rockets.error);
  const isLoading = useSelector((state) => state.rockets.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, []);

  return (
    <main className={rocketStyles.container}>
      {isLoading && <h3 className="textError">Loading...</h3>}
      {errorMessage && <h3 className="textError">{errorMessage}</h3>}
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </main>
  );
};

export default RocketList;
