import React from 'react';
import DisplayMissions from './DisplayMissions';

const MissionTable = () => (
  <div>
    <table className="missions-table">
      <tr className="col-header">
        <tr className="col-header">Mission</tr>
        <th>Description</th>
        <th>Status</th>
      </tr>
      <tbody>
        <DisplayMissions />
      </tbody>
    </table>
  </div>
);

export default MissionTable;
