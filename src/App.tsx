import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import UserProfile from './pages/userprofile/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user/:id" element={<UserProfile />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;