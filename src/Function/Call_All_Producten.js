import React, { useEffect, useState} from 'react';
import axios from 'axios';


function Call_All_Producten() {
 
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {  
     setLoading(true); 
     axios.get("https://localhost:7226/api/Productens", {
        responseType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
    .then((response) => {
        setData(response.data); 
        console.log(response.data); 
    })
    .catch((err) =>{
      setError(err);
    })
    .finally(() =>{
      setLoading(false);  
    })
    }, []);
     return {data, loading, error};

}
  /*.cath(error => console.error(`Error: ${error}`)); */
export default Call_All_Producten;