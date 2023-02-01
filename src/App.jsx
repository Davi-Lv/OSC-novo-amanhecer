import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Campanhas from './assets/pages/Campanhas'
import Inicio from "./assets/pages/Inicio";
import Header from "./assets/components/Header";
import Contatos from "./assets/pages/Contatos";
import Doar from "./assets/pages/Doar";

export default function App(){
    return(
    <div className="center">
    <Header/>
      <nav className="buttons separador">
        <Link to="/" ><button className="button">Inicio</button></Link>
        <Link to="/Campanhas" ><button className="button">Campanhas</button></Link>
        <Link to="/Doar" ><button className="button">Doar</button></Link>
        <Link to="/Contatos"><button className="button">Fale Conosco</button></Link>
      </nav>

      <main>          
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/Doar" element={<Doar/>}/>
          <Route exact path="/Campanhas" element={<Campanhas/>}/>
          <Route exact path="/Contatos" element={<Contatos/>}/>
        </Routes>          
      </main>
    </div>
  )
}