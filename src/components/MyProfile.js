import React from 'react';
import { useSelector } from 'react-redux';
import ListReservedMissions from './missions/ListReservedMissions';
import ReservedRockets from './rockets/reservedRockets';
import '../App.css';

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
        <ReservedRockets rockets={rockets} />
        { rockets.length === 0 && <p className="firstJoin">&emsp; No Reserved Rocket </p>}
      </div>
    </div>
  );
};

export default MyProfile;
