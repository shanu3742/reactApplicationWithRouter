import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './component/Navigation/Navigation';
import ProtectedRoutes from './Lib/ProtectedRoutes/ProtectedRoutes';
import AboutPage from './Page/AboutPage/AboutPage';
import AdminPage from './Page/AdminPage/AdminPage';
import Chartbox from './Page/ChartBoxPage/Chartbox';
import DashboardPage from './Page/DashboardPage/DashboardPage';
import HomePage from './Page/HomePage/HomePage';
import LendingPage from './Page/LendingPage/LendingPage';
import PageNotFound from './Page/NotFoundPage/PageNotFound';
import TimeLinePage from './Page/TimelinePage/TimeLinePage';
import UserInfoPage from './Page/userInfoPage/UserInfoPage';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [selectUser, setSelectUser] = React.useState(false);

  const handleLogin = () => setSelectUser(true);
  const handleLogout = () => setUser(null);
  // setUser({ id: '1', name: 'robin' }
  const setFirstUser = () => {
    setUser({ id: '1', name: 'robin', isAdmin: false });
    setSelectUser(false);
  };
  const setSecondUser = () => {
    setUser({ id: '1', name: 'robin', isAdmin: true });
    setSelectUser(false);
  };
  return (
    <BrowserRouter>
      <h1>React Router</h1>
      {!user ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      {selectUser && (
        <div>
          <button onClick={setFirstUser}>user1</button>
          <button onClick={setSecondUser}>user2</button>
        </div>
      )}

      <Navigation />
      <Routes>
        <Route index element={<LendingPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="landing" element={<LendingPage />} />

        <Route element={<ProtectedRoutes isAllowed={!!user} />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="chartbox" element={<Chartbox />} />
          <Route path="timeline" element={<TimeLinePage />} />
          <Route path="userinfo" element={<UserInfoPage />} />
        </Route>

        <Route
          path="admin"
          element={
            <ProtectedRoutes isAllowed={!!user && user.isAdmin}>
              <AdminPage />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
