import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ isAllowed, defaultPath = '/landing', children }) => {
  if (!isAllowed) {
    return <Navigate to={defaultPath} replace />;
  }

  return <>{!children ? <Outlet /> : children}</>;
};

export default ProtectedRoutes;
