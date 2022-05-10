import React from 'react';
import { Navigate } from 'react-router-dom';
import { ApplicationContext } from '../../App';

const Chartbox = () => {
  const user = React.useContext(ApplicationContext);
  // Admin  page can't be access by any useer so we use protect routes here
  if (!user) {
    return <Navigate to="/landing" replace />;
  }

  return <div>Chartbox</div>;
};

export default Chartbox;
