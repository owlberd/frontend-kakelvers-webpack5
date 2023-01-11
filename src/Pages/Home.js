import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 

export default function Home() {
  return (
    <center>
       <div style={{height: '100vh'}}>
         <br></br>
          Home
          <Link to="registreren"><li>Registreren</li></Link>    
      </div>
    </center>
  )
}
