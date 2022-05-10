import React from 'react';
import { Navigate } from 'react-router-dom';
import { ApplicationContext } from '../../App';

const UserInfoPage = () => {
  //   const user = React.useContext(ApplicationContext);
  //   // UserInfoPage  page can't be access by any useer so we use protect routes here
  //   if (!user) {
  //     return <Navigate to="/landing" replace />;
  //   }

  return <div>UserInfoPage</div>;
};

export default UserInfoPage;
