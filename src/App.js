
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div className=''>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/donate" element={<Donate/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
