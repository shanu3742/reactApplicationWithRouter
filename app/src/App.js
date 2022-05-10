import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './component/Navigation/Navigation';
import AboutPage from './Page/AboutPage/AboutPage';
import AdminPage from './Page/AdminPage/AdminPage';
import Chartbox from './Page/ChartBoxPage/Chartbox';
import DashboardPage from './Page/DashboardPage/DashboardPage';
import HomePage from './Page/HomePage/HomePage';
import LendingPage from './Page/LendingPage/LendingPage';
import PageNotFound from './Page/NotFoundPage/PageNotFound';
import TimeLinePage from './Page/TimelinePage/TimeLinePage';
import UserInfoPage from './Page/userInfoPage/UserInfoPage';

export const ApplicationContext = React.createContext();

const App = () => {
  const [user, setUser] = React.useState(null);

  const handleLogin = () => setUser({ id: '1', name: 'robin' });
  const handleLogout = () => setUser(null);

  return (
    <ApplicationContext.Provider value={user}>
      <BrowserRouter>
        <h1>React Router</h1>
        {!user ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}

        <Navigation />
        <Routes>
          <Route index element={<LendingPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="landing" element={<LendingPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="chartbox" element={<Chartbox />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="timeline" element={<TimeLinePage />} />
          <Route path="userinfo" element={<UserInfoPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ApplicationContext.Provider>
  );
};

export default App;
