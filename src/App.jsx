import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"; //Importamos el Navbar con import Navbar from "./components/Navbar";.
import SobreMi from "./components/SobreMi";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <Navbar /> {/*Agregamos <Navbar /> al inicio del return().*/}
      <header className="text-center mt-10">
        <h1 className="text-4xl text-white font-bold">¡Hola! Soy Christian Franco</h1>
        <p className="text-xl text-white">Desarrollador Web Junior</p>
        <br />
      </header>

      <SobreMi />

      <TechStack /> {/* Mostramos la sección de tecnologías */}

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
