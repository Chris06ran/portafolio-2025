import React, { useState } from "react"; //Importamos el hook useState de React para manejar el estado del menú.

// Importamos los íconos de FaBars (icono de menú hamburguesa ☰) y FaTimes (icono de cerrar ✖).
import { FaBars, FaTimes } from "react-icons/fa"; 

function Navbar() {
     //menuOpen: es una variable de estado que determina si el menú está abierto o cerrado.
  //setMenuOpen es la función para cambiar su valor.
  //useState(false) significa que el menú empieza cerrado (false).
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white p-4"> {/*bg-gray-800: Fondo gris oscuro, text-white: Texto en color blanco, p-4: Padding para espaciado interno.*/}
      <div className="container mx-auto flex justify-between items-center"> 
        {/*container mx-auto: Centra el contenido. 
           flex justify-between items-center:
           flex: Usa Flexbox.
           justify-between: Separa los elementos (logo a la izquierda, menú a la derecha).
           items-center: Alinea verticalmente al centro.
        */}
        <h1 className="text-2xl font-bold">Mi Portafolio</h1> {/* <h1> es el título del navbar. */}

        {/* Botón del menú en móviles */}
        <button
          //Oculta el botón en pantallas grandes (md significa "medium" o más grande), text-2xl: Tamaño del icono más grande.
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)} 
           // Al hacer clic, cambia el estado de menuOpen.
           //Si menuOpen = false, cambia a true (muestra el menú).
           //Si menuOpen = true, cambia a false (oculta el menú).
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
          {/*Si menuOpen es true, muestra el icono ✖ (<FaTimes />).
            Si menuOpen es false, muestra el icono ☰ (<FaBars />).
           */}
        </button>

        {/* Menú normal en pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
        {/* 
          hidden md:flex:
          Oculta el menú en móviles (hidden).
          Muestra el menú en pantallas medianas y grandes (md:flex).
          space-x-6: Espacio horizontal entre los enlaces.
          hover:text-gray-400: Cambia el color del texto al pasar el mouse.
        */}


          <li><a href="#inicio" className="hover:text-gray-400">Inicio</a></li>
          <li><a href="#sobre-mi" className="hover:text-gray-400">Sobre mí</a></li>
          <li><a href="#proyectos" className="hover:text-gray-400">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-gray-400">Contacto</a></li>
        </ul>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && ( // Si menuOpen = true, muestra el menú móvil. Si menuOpen = false, lo oculta.
        <ul className="md:hidden bg-gray-700 text-center space-y-4 p-4 absolute top-16 left-0 w-full">
          {/*
            md:hidden: Solo se muestra en móviles.
            absolute top-16 left-0 w-full:
              -absolute: Lo posiciona sobre el contenido.
              -top-16 left-0: Lo coloca debajo del navbar.
              -w-full: Ocupa todo el ancho.
            bg-gray-700: Fondo oscuro para el menú móvil.
            space-y-4: Espaciado entre enlaces.
            onClick={() => setMenuOpen(false)}
              -Cuando se hace clic en un enlace, se cierra el menú.
           */}

          <li><a href="#inicio" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#sobre-mi" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
          <li><a href="#proyectos" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#contacto" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;