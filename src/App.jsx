import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Campanhas from './assets/pages/Campanhas'
import Inicio from "./assets/pages/Inicio";
import Header from "./assets/components/Header";
import Contatos from "./assets/pages/Contatos";
import Doar from "./assets/pages/Doar";

export default function App() {

  
  return (
    <div className="center">
      <Header />
      <nav className="buttons space">
        <Link to="/" ><button className="btn">Inicio</button></Link>
        <Link to="/Campanhas" ><button className="btn">Campanhas</button></Link>
        <Link to="/Doar" ><button className="btn">Doar</button></Link>
        <Link to="/Contatos"><button className="btn">Fale Conosco</button></Link>
      </nav>

      <main>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/Doar" element={<Doar />} />
          <Route exact path="/Campanhas" element={<Campanhas />} />
          <Route exact path="/Contatos" element={<Contatos />} />
        </Routes>
      </main>
    </div>
  )
}

/*
echo "# OSC-novo-amanhecer" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Davi-Lv/OSC-novo-amanhecer.git
git push -u origin main
*/