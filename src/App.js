import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Book from './pages/Book';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navigation />
        <div
          style={{
            padding: '0.5rem 1rem',
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:version/:book' element={<Book />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<div>404</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
