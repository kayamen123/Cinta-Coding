import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import DetailPost from './components/DetailPost/DetailPost';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/detailPost" element={<DetailPost />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
