import React from 'react';
import { useSelector } from 'react-redux';
import ListReservedMissions from './missions/ListReservedMissions';
import ReservedRocket from './rockets/reservedRocket';

const MyProfile = () => {
  const reservedRockets = (rockets) => rockets.filter((rocket) => rocket.reserved === true);
  const rockets = useSelector((state) => reservedRockets(state.rockets.rockets));

  return (
    <div className="profilesCont">
      <div className="missionsCont">
        <h3 className="heading">My Missions</h3>
        <ListReservedMissions />
      </div>
      <div className="rocketsCont">
        <h3 className="heading">My Rockets</h3>

        {rockets.map((rocket) => (
          <ReservedRocket key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
