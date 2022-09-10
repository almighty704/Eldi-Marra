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
          <Route element={<Home2 />} path='/'></Route>
          <Route element={<About />} path='/about'></Route>
          <Route element={<Team />} path='/team'></Route>
          <Route element={<Faq />} path='/faq'></Route>
          <Route element={<Projects />} path='/projects'></Route>
          <Route element={<Services />} path='/services'></Route>
          <Route element={<ServicesDetails />} path='/services-details'></Route>
          <Route element={<ProjectDetails />} path='/project-details'></Route>
          <Route element={<News />} path='/news'></Route>
          <Route element={<NewsDetails />} path='/news-details'></Route>
          <Route element={<Contact />} path='/contact'></Route>
        </Routes>
      </Router>
      <ScrollIndicator />
    </>
  );
}

export default App;
