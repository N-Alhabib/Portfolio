import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LogAnalyzerDetail from './pages/LogAnalyzerDetail';
import FreightLXDetail from './pages/FreightLXDetail';
import CurrentWorkDetail from './pages/CurrentWorkDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/log-analyzer" element={<LogAnalyzerDetail />} />
          <Route path="/projects/freightlx" element={<FreightLXDetail />} />
          <Route path="/projects/current-work" element={<CurrentWorkDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
