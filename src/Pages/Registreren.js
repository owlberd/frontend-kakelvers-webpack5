import { useState } from "react";
import React from 'react';
import axios from 'axios';


export default function Registreren() {

    const [naam, setNaam] = useState('');
    const [email, setEmail] = useState('');
    const [plaats, setPlaats] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();    
      console.log(naam, email);
      //alert("gebruiker aangemaakt");
      try{
          const resp = await axios.post("https://localhost:7226/api/Klants",{naam: naam, achternaam: "aa", email: email, telefoon: "063044475", lidSinds: "28-12-22"});
          console.log(resp.data);
           alert("gebruiker aangemaakt");
          
      }catch (error) {
        console.log(error.response);
      }
    };


  return (
    <center>
        <div style={{height: '100vh'}}>
            <h1>Registreren</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>Naam: </label>
                    <input 
                    type="text" 
                    placeholder="Naam..."
                    id='naam'
                    value={naam}
                    onChange={(e) => setNaam(e.target.value)}
                    ></input><br></br>
                <label>Email: </label>
                    <input 
                    type="text" 
                    placeholder="Email..."
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></input><br></br>
                <label>Plaats: </label>
                    <input 
                    type="text" placeholder="plaats..."></input><br></br>
                    <label>wachtwoord: </label>
                    <input type="text" placeholder="wachtwoord"></input><input type="text" placeholder="wachtwoord bevestigen"></input><br></br>
                <input type="submit" value="Aanmaken"></input> 
            </form> 
                     
        </div>
    </center>  
  )
}
