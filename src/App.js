import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Missions from './pages/Missions';
import store from './redux/configureStore';
import { fetchMisions } from './redux/missions/missionsSlice';
import Profile from './pages/Profile';
import RocketList from './components/rockets/rocketList';
import NavBar from './components/NavBar';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchMisions());
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<RocketList />} />
        <Route exact path="/rockets" element={<RocketList />} />
        <Route exact path="/missions" element={<Missions />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
