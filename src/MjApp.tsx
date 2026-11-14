import { BrowserRouter, Route, Routes } from 'react-router';
import MjNav from './components/MjNav';
import MjHomePage from './pages/MjHomePage';
import MjWorkPage from './pages/MjWorkPage';
import MjServicePage from './pages/MjServicePage';
import MjAboutPage from './pages/MjAboutPage';
import MjContactPage from './pages/MjContactPage';

export default function MjApp() {
  return (
    <BrowserRouter>
      <MjNav />
      <Routes>
        <Route path="/" element={<MjHomePage />} />
        <Route path="/work" element={<MjWorkPage />} />
        <Route path="/service" element={<MjServicePage />} />
        <Route path="/about" element={<MjAboutPage />} />
        <Route path="/contact" element={<MjContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
