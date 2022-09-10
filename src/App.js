import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTopRoute from './components/ScrollTopRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import Services from './pages/Services';
import ServicesDetails from './pages/ServicesDetails';
import Team from './pages/Team';

function App() {
  return (
    <>
      <Router>
        <ScrollToTopRoute />
        <Routes>
          <Route path='/home-2' element={<Home2 />} />
          <Route path='/home-3' element={<Home3 />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services-details' element={<ServicesDetails />} />
          <Route path='/project-details' element={<ProjectDetails />} />
          <Route path='/news' element={<News />} />
          <Route path='/news-details' element={<NewsDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home1 />} />
        </Routes>
      </Router>
      <ScrollIndicator />
    </>
  );
}

export default App;
