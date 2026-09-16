import React from 'react';

import './App.css'

import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Testimonial from './Testimonial';
import Manage from './Manage';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonial />
      <Features />
      <Manage />
    </div>
  );
}

export default App;
      