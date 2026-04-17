import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import SeatsPage from './pages/SeatsPage';
import GalleryPage from './pages/GalleryPage';
import AccessPage from './pages/AccessPage';
import './styles/globals.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/seats"   element={<SeatsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/access"  element={<AccessPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
