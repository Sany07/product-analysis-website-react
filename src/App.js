import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Nav/Header';
import Homepage from './Components/Homepage/Homepage.jsx'
import Blogs from './Components/Blogs/Blogs.jsx';
import About from './Components/About/About.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </Container>
    </>
  );
}

export default App;
