import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExtractPage from './pages/ExtractPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/extract" element={<ExtractPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;