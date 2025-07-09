import React from "react";
import pf from "../assets/pf.jpg"; // Importamos la imagen
import { FaLinkedin } from "react-icons/fa";


function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-gray-900 text-white py-16 px-6">
      
      {/* 
      flex flex-col md:flex-row → En móviles, la imagen y el texto estarán uno debajo del otro (flex-col), pero en pantallas más grandes (md), estarán uno al lado del otro (flex-row).
      items-center → Centra los elementos verticalmente. */}
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center">
        {/* 📌 Imagen de perfil */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src={pf}
            alt="Foto de perfil"
            className="rounded-full w-48 h-48 mx-auto border-4 border-blue-500 shadow-lg"
            //  rounded-full → Hace que la imagen sea circular.
            //  w-48 h-48 → Tamaño fijo de 48x48 (puedes cambiarlo según prefieras).
            //  mx-auto → Centra la imagen horizontalmente.
            //  border-4 border-blue-500 → Agrega un borde azul alrededor de la imagen.
            //  shadow-lg → Agrega una sombra para resaltar la imagen.
          />
        </div>

        {/* 📌 Texto de presentación */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            ¡Hola! Soy un desarrollador web apasionado por la tecnología.
            Me especializo en <strong className="text-blue-400">React, JavaScript, y Tailwind CSS</strong>.
            Siempre estoy aprendiendo nuevas tecnologías y buscando mejorar mis habilidades
            para construir aplicaciones modernas y eficientes.
          </p>
          
                    {/* DIV para acomodar el botón de descargar CV a lado de contactame */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            {/*
                flex → Alinea los botones en fila.
                flex-wrap → Permite que se acomoden en móviles si no caben.
                justify-center → Centra los botones en pantallas pequeñas.
                md:justify-start → Los alinea a la izquierda en pantallas más grandes.
                gap-4 → Espacio entre los botones.
                mt-6 → Margen superior.
            */}

            {/* BOTÓN DE CONTACTAME */}
          
            <a
                href="#contacto"
                className="w-48 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
                Contáctame
            </a>

            {/* Botón para descargar CV */}
            <a
                href="/CV-2025.pdf" //→ Enlace al archivo PDF en la carpeta public.
                download="CV-Christian-Franco-2025.pdf" // → Indica que el archivo se descargará con el nombre CV Christian Franco-2025.pdf
                className="w-48 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
                📄 Descargar CV
            </a>

            {/* Botón LinkedIn */}
            <a
                href="https://www.linkedin.com/in/c-franco-017842135" // <-- enlace de mi perfil de LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 h-12 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
                <FaLinkedin className="text-2xl" />
                LinkedIn
            </a>
            
            </div>

        </div>
      </div>
    </section>
  );
}

export default SobreMi;