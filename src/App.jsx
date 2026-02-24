import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SoccerAnalysis from './pages/SoccerAnalysis';
import Writing from './pages/Writing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/soccer-analysis" element={<SoccerAnalysis />} />
          <Route path="writing" element={<Writing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
