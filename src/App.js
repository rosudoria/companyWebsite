import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route exact path='/' element={<About />}/>*/}
        <Route exact path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
