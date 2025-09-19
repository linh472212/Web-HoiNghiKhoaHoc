import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgot-password';
import NewsDetail from "./pages/news/[id]";

function App() {
  return (
    <Router>
      <Routes>

        {/* Trang công cộng */}
        {/* //  <Route element={<PublicLayoutAS />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/news/:id"
          element={
              <NewsDetail />
          }
        />

        {/* // </Route> */}
      </Routes>
    </Router>
  );
}

export default App;