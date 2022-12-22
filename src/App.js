import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import RocketList from './components/rockets/rocketList';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route exact path="/rockets" element={<RocketList />} />
      <Route exact path="/missions" element={<Missions />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
