import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './component/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <h1>React Router</h1>

      <Navigation />
      <Routes>
        <Route index element={<h1>Lending page</h1>} />
        <Route path="home" element={<h1>home page</h1>} />
        <Route path="dashboard" element={<h1>Dashboard page</h1>} />
        <Route path="about" element={<h1>about page</h1>} />
        <Route path="chartbox" element={<h1>chartbox page</h1>} />
        <Route path="admin" element={<h1>admin page</h1>} />
        <Route path="timeline" element={<h1>timeline page</h1>} />
        <Route path="userinfo" element={<h1>userinfo page</h1>} />
        <Route path="*" element={<p>Oops 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
