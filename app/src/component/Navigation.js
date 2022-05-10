import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/about">Landing</Link>
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/chartbox">Analytics</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navigation;
