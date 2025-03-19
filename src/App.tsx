import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import UserProfile from './pages/userprofile/UserProfile';
import Quiz from './pages/quiz/Quiz';
import AlFatihah from './pages/quiz/AlFatihah';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user/:id" element={<UserProfile />} />
          <Route path="Quiz" element={<Quiz />} />
        </Route>
        <Route path="Quiz/AlFatihah" element={<AlFatihah />} />

        {/* 404 page */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}


