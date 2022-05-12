import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import CardDetails from './Pages/Details';
import About from './Pages/About';



/* 
1.- tiene una pagina home, donde nos muestra primeros 2' personajes
2. tiene una pagina about donde habla de ustedes como devs
3.- estilos
4.- al hacer lick a un personake me direcciona a una pantalla detall del personaje

Retos investigar paginacion e implementarla en home 
*/
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/character/:id" element={<CardDetails />} />
      </Routes>


    </div >
  );
}

export default App;
