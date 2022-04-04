import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Nav/Header';
import Homepage from './Components/Homepage/Homepage.jsx'
import Blogs from './Components/Blogs/Blogs.jsx';
import About from './Components/About/About.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Reviews from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';

import { Container } from 'react-bootstrap';
import NotFound from './Components/404/NotFound';

function App() {
  return (
    <>
      <Container>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
        </Container>
    </>
  );
}

export default App;
