import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 

export default function Nav() {
  return (
        <nav>
          <h3>Kakelvers</h3>
          <ul className='nav-links'>
              <Link to="/"><li>Home</li></Link>
              <Link to="over"><li>over ons</li></Link>
              <Link to="kletscorner"><li>klets corner</li></Link>
              <Link to="winkel"><li>Winkel</li></Link>    
          </ul>
        </nav>
  ) 
}
