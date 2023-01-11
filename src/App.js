import './App.css';
import React from 'react'; 
import Klanten from './Klanten';

import Nav from './Navigation/Nav_alg'
import Home from './Pages/Home';
import Over from './Pages/Over';
import Winkel from './Pages/Winkel';
import Registreren from './Pages/Registreren';
import ProductAanpassen from './Pages/ProductAanpassen';
import KletsCorner from './Pages/KletsCorner';
import ErrorPage from './Pages/ErrorPage';

import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'; 
import Call_All_Klanten from './Function/Call_All_Klanten';
import Call_All_Producten from './Function/Call_All_Producten';



document.title = "kakelvers"; 

function App() {
  /*const [klanten, setKlanten] = useState(["aweawe","aweaw"])*/
 
  const mystyle = {
    backgroundImage: `url("https://m.foolcdn.com/media/dubs/original_images/Farm.jpg")`
    
  };
  return ( 
    <Router>
      <body style={mystyle}> 
      <Nav />   
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="over" element={<Over/>} />
          <Route path="winkel" element={<Winkel/>} />
          <Route path="registreren" element={<Registreren/>} />
          <Route path="kletscorner" element={<KletsCorner/>} />
          <Route path="productaanpassen" element={<ProductAanpassen/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        </body>
    </Router>
    
  )
}

export default App;
