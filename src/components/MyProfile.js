import React from 'react';
import Button from 'react-bootstrap/Button';

const MyProfile = () => (
  <div className="profile">
    <div>
      <h3>My Mission</h3>
    </div>
    <div>
      <h3>My Rockets</h3>
      <Button type="button" className="btn btn-primary">Login here</Button>
    </div>
  </div>
);

export default MyProfile;
