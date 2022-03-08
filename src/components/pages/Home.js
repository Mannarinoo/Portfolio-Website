import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import '../Navbar.css'

export default function Home() {
  return (
    <>
    <Navbar />
    <div>
    <div className="home">
      <div className="home-container">
      <p className="name-container">Joseph Mannarino</p>
      <div>
        <p className="portfolio-container">Website Portfolio</p>
      </div>
      <div>
      </div>
      </div>
    </div>
    </div>
    </>
  );
}
