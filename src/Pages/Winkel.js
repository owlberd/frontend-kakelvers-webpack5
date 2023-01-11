import React, {Component, useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 
import Call_All_Producten from '../Function/Call_All_Producten';
import '../App.css';


    function Winkel() {
      const {data, loading, error} = Call_All_Producten();
      const [searchTerm, setSearchTerm] = useState("");
      if(loading) return <center><div style={{height: '100vh'}}><h1>laden...</h1></div></center>;

      if(error) console.log(error);
      return (
        <center>
          <div style={{height: '100vh'}}>
            <h1>Producten</h1>
            <input type="text" placeholder="Zoeken..." onChange={(event) =>{
             setSearchTerm(event.target.value);
            }}
            />
            <br></br>
            <br></br>
          <table border="1">
            <th>Id</th><th>product naam</th><th>omschrijving</th><th>eenheid</th><th>inhoud</th><th>voorraad</th>
              {data?.filter((data)=>{
                if (searchTerm == ""){
                  return data;
                }else if (data.productNaam.toLowerCase().includes(searchTerm.toLowerCase())){
                  return data;
                }
              }
              ).map((data, key) => (
              
              <tr>
                <div className='product' key={key}>
                  <td>{data.id}</td>
                  </div>
                  <td>{data.productNaam}</td>
                  <td>{data.productOmschrijving}</td>
                  <td>{data.eenheid}</td>
                  <td>{data.massaVolume}</td>
                  <td>{data.voorraad}</td>
                  <td><Link to="../productaanpassen" state={{ ID: data.id }}><li><img src="https://cdn-icons-png.flaticon.com/512/266/266146.png" alt="Flowers in Chania" width="25" height="25"/></li></Link>    </td>            
              </tr>
               ))}
          </table>
      </div>
      </center>
      
      );
    }

export default Winkel;
/*<h1>{data[1].naam}</h1> */
/*  <div key={data.naam} className='data'>{data.id} {data.naam}</div>*/