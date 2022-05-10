import React from 'react';
import { Navigate } from 'react-router-dom';
import { ApplicationContext } from '../../App';

const AdminPage = () => {
  //   const user = React.useContext(ApplicationContext);
  //   // Admin  page can't be access by any useer so we use protect routes here
  //   if (!user) {
  //     return <Navigate to="/landing" replace />;
  //   }

  return <div>AdminPage</div>;
};

export default AdminPage;
