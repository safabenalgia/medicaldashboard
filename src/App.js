import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import TopBar from './components/topbar';
import Dashboard from './pages/dashboard';
import Patients from './pages/patient';
import Doctors from './pages/doctor';
import './App.css'; // Importer les styles CSS

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/doctors" element={<Doctors />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
