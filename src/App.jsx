import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import SoccerAnalysis from './pages/SoccerAnalysis';
import Writing from './pages/Writing';
import NFLWeek1Kickoff from './pages/NFLWeek1Kickoff';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects/soccer-analysis" element={<SoccerAnalysis />} />
          <Route path="writing" element={<Writing />} />
          <Route path="writing/nfl-2026-week-1-patriots-seahawks" element={<NFLWeek1Kickoff />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
