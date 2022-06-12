import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard/:id" element={<Dashboard />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
