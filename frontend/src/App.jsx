import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import Login from './pages/login';


function App() {
  return (
    <Router>
      <Routes>
        {/* Trang công cộng */}
      {/* //  <Route element={<PublicLayoutAS />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
       {/* // </Route> */}
      </Routes>
    </Router>
  );
}

export default App;