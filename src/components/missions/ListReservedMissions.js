import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import MissionsProfile from './MissionsProfile';

const ListReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const { data } = missions;
  const reservedMissions = data.filter((missions) => missions.reserved);

  return (
    <div>
      { reservedMissions.length === 0 && <p className="firstJoin">&emsp; You Have Not Joined Any Mission</p>}
      <p style={{ width: '40rem' }}>
        <ListGroup>
          {reservedMissions.map((mission) => (

            <MissionsProfile
              key={uuidv4()}
              name={mission.mission_name}
            />

          ))}
        </ListGroup>
      </p>

    </div>
  );
};

export default ListReservedMissions;
