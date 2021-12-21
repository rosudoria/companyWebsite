import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/services' element={<Services />}/>
        <Route exact path='/portfolio' element={<Portfolio />}/>
        <Route exact path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
