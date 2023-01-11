import React, {Component, useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Call_Id_Producten from '../Function/Call_Id_Producten';

  function ProductAanpassen() {

    const [ProductNaam, setProductNaam] = useState('');
    const [ProductOmschrijving, setProductOmschrijving] = useState('');
    const [Eenheid, setEenheid] = useState('');
    const [Massa, setMassa] = useState('');
    const [Voorraad, setVoorraad] = useState('');


    const location = useLocation();
    const { ID } = location.state;
    const {data, loading, error} = Call_Id_Producten(ID);
    
    const handleSubmit = async (e) => {
      e.preventDefault();    
     // console.log(naam, email);
      //alert("gebruiker aangemaakt");
      try{
          const resp = await axios.put(`https://localhost:7226/api/Productens/${ID}`,
          {
            id: ID, 
            productId: data.productId, 
            productNaam: ProductNaam, 
            productOmschrijving: ProductOmschrijving,
            eenheid: Eenheid,
            massaVolume: Massa,
            voedingswaarde: "00",
            ean: 123,
            voorraad: Voorraad,
            leverancierId: 1,
            headers: {
              'Accept': ' */*',
              'Content-Type': 'application/json',
            }
          });
          console.log(resp.data);
           alert("wijzigingen opgeslagen");
          
      }catch (error) {
        console.log(error.response);
      }
    };

    const handleDelete = (e) => {
      e.preventDefault();
       try{
           const resp =  axios.delete(`https://localhost:7226/api/Productens/${ID}`,
           {
            responseType: 'json',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
           });
           console.log(resp.data);
            alert("product verwijderd");
           
       }catch (error) {
         console.log(error.response);
       }
     };


    if(loading) return <center><div style={{height: '100vh'}}><h1>laden...</h1></div></center>;

    if(error) console.log(error);
    return (
      <center>
        <div style={{height: '100vh'}}>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Producten</h1>
          <br></br>
          <br></br>
        <table border="1">
        <th>Id</th><th>product naam</th><th>omschrijving</th><th>eenheid</th><th>inhoud</th><th>voorraad</th><th><img src="https://cdn-icons-png.flaticon.com/512/3481/3481306.png" alt="Flowers in Chania" width="25" height="25" onClick={handleDelete}></img></th>
            <tr>
                <td>{data?.id}</td>
                <td> <input 
                  type="text"  
                  id={data?.productNaam} 
                  placeholder={data?.productNaam}  
                  onChange={(e) => setProductNaam(e.target.value)}>
                </input></td>
                <td><input type="text"   id={data?.productOmschrijving} placeholder={data?.productOmschrijving} onChange={(e) => setProductOmschrijving(e.target.value)} required></input></td>
                <td><input type="text" id={data?.eenheid} placeholder={data?.eenheid}  onChange={(e) => setEenheid(e.target.value)} required></input></td>
                <td><input type="text" id={data?.massaVolume} placeholder={data?.massaVolume}  onChange={(e) => setMassa(e.target.value)} required></input></td>
                <td><input type="text" id={data?.voorraad} placeholder={data?.voorraad}  onChange={(e) => setVoorraad(e.target.value)} required></input></td>
                <td><input type="submit" value="Aanpassen"></input></td>          
            </tr>
        </table>
        </form>
    </div>
    </center>
    
    );
  }

export default ProductAanpassen;
