import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home'
import State from './state';
import Traditions from './traditions';
import About from './about';
import Event from './event';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Website() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/states" element={<State />} />
        <Route path="/traditions" element={<Traditions />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<Website />, document.getElementById('root'));
