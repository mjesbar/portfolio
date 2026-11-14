import { BrowserRouter, Route, Routes } from 'react-router';
import MjNav from './components/MjNav';
import MjPageTransition from './components/MjPageTransition';
import MjHomePage from './pages/MjHomePage';
import MjWorkPage from './pages/MjWorkPage';
import MjServicePage from './pages/MjServicePage';
import MjAboutPage from './pages/MjAboutPage';
import MjContactPage from './pages/MjContactPage';

export default function MjApp() {
  return (
    <BrowserRouter>
      <img src="/assets/blueprint.avif" alt="" className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover grayscale opacity-30" />
      <MjNav />
      <Routes>
        <Route element={<MjPageTransition />}>
          <Route path="/" element={<MjHomePage />} />
          <Route path="/work" element={<MjWorkPage />} />
          <Route path="/service" element={<MjServicePage />} />
          <Route path="/about" element={<MjAboutPage />} />
          <Route path="/contact" element={<MjContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
