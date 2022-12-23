import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets.filter());
  return (
    <div className="profile">
      <div>
        <h3>My Mission</h3>
        {rockets.map((rocket) => (
          <p key={rocket.id}>{rocket.rocketName}</p>
        ))}
      </div>
      <div>
        <h3>My Rockets</h3>
        <Button type="button" className="btn btn-primary">Login here</Button>
      </div>
    </div>
  );
};

export default MyProfile;
