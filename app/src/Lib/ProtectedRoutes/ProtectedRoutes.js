import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ApplicationContext } from '../../App';

const ProtectedRoutes = ({ defaultPath = '/landing', children }) => {
  const user = React.useContext(ApplicationContext);
  // Admin  page can't be access by any useer so we use protect routes here
  if (!user) {
    return <Navigate to={defaultPath} replace />;
  }

  return <>{!children ? <Outlet /> : children}</>;
};

export default ProtectedRoutes;
