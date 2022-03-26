//import logo from './logo.svg';
//import './App.css';
import { Route} from 'react-router-dom';
import Bienvenida from './Componentes/Bienvenida';
import Layout from './Componentes/Layout';
import Nav from './Componentes/Nav'
import Cards from './Componentes/Cards';
import { useState } from "react";
import About from './Componentes/About';
import Footer from './Componentes/Footer';
function App() {
  const [ciudades, setCiudades] = useState([]);
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const ciudad1 = {
            id: data.id,
            name: data.name,
            min: Math.round( data.main.temp_min- 273.15),
            max: Math.round( data.main.temp_max - 273.15),
            img: data.weather[0].icon,
          };
          ciudades.find((ciudad) => ciudad.id === ciudad1.id)
            ? alert("Ciudad ya está agregada")
            : setCiudades([...ciudades, ciudad1]);
        } else {
          alert("No hay información para la ciudad solicitada");
        }
      });
  }
function onClose(id){
  setCiudades(oldCity=>oldCity.filter(e=>e.id!==id))
}
  return <Layout>
    <Nav onSearch={onSearch}/>
    <Route exact path='/' component={Bienvenida}/> 
    <Route exact path='/cards' render={()=><Cards ciudades={ciudades} onClose={onClose}/>}/>
    <Route exact path='/about'component={About}/>
    <Footer/>
  </Layout>
}

export default App;
