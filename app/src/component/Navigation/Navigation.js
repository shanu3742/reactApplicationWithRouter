import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar_container">
      <Link to="/about">about</Link>
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/chartbox">Analytics</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/timeline">timeline</Link>
      <Link to="/userinfo">userinfo</Link>
    </nav>
  );
};
// timeline
export default Navigation;
