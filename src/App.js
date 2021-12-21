import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./pages/About";

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
