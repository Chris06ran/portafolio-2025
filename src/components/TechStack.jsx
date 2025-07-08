import React from "react";
import { FaReact, FaNodeJs, FaWordpressSimple } from "react-icons/fa"; //→ Importamos los iconos de FontAwesome.
import { SiJavascript, SiTailwindcss, SiFirebase, SiPostgresql, SiCplusplus, SiGithub, SiPostman  } from "react-icons/si"; //→ Importamos iconos de Simple Icons.

function TechStack() {
  return (
    <section id="techstack" className="bg-gray-900 text-white py-16 px-6">
      {/* <section> → Crea una sección en HTML.
          id="techstack" → Le damos un identificador para que podamos hacer referencia desde otras partes del código.
          className="bg-gray-900 text-white py-16 px-6"
          bg-gray-900 → Fondo gris oscuro.
          text-white → Texto en color blanco. 
          py-16 px-6 → Añade padding (16 en vertical, 6 en horizontal).*/}

        {/* Contenedor General */}
      <div className="container mx-auto text-center">
        {/* container → Ajusta el contenido dentro de los márgenes.
        mx-auto → Centra horizontalmente.
        text-center → Centra el texto. */}

           {/* TITULO */}
        <h2 className="text-4xl font-bold mb-10">🛠️ Tech Stack</h2>
        {/* <h2> → Título de la sección.
        text-4xl → Tamaño grande del texto.
        font-bold → Texto en negrita.
        mb-10 → Margen inferior grande. */}

          {/* DISEÑO DE LA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* grid → Usa un sistema de cuadrícula.
        grid-cols-1 → 1 columna en móviles.
        md:grid-cols-3 → 3 columnas en pantallas medianas o grandes.
        gap-8 → Espaciado entre elementos. */}

          {/* Front End */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Crea una caja con estilo
              bg-gray-800 → Fondo gris oscuro.
              p-6 → Padding (espaciado interno).
              rounded-lg → Bordes redondeados.
              shadow-lg → Sombra para darle un efecto elevado. */}

            <h3 className="text-3xl font-semibold mb-6">🎨 Front End</h3>
            {/* Título de la columna:
            text-3xl → Tamaño grande.
            font-semibold → Fuente semi-negrita.
            mb-6 → Margen inferior. */}

            <ul className="text-gray-300 space-y-3 text-xl">
            {/* Lista de tecnologías:
            text-gray-300 → Texto gris claro.
            space-y-3 → Espacio vertical entre elementos.
            text-xl → Tamaño grande del texto. */}
              
              
              {/* Elemento de la lista:
              flex items-center → Usa flexbox y alinea verticalmente.
              gap-3 → Espaciado horizontal entre icono y texto. */}
              <li className="flex items-center gap-3">
                <FaReact className="text-blue-400 text-4xl" /> React.js
                  {/* text-blue-400 → Icono en color azul.
                  text-4xl → Tamaño grande del icono. */}
              </li>

               <li className="flex items-center gap-3">
                <SiJavascript className="text-yellow-400 text-4xl" /> JavaScript
              </li>

              <li className="flex items-center gap-3">
                <SiTailwindcss className="text-teal-400 text-4xl" /> Tailwind CSS
              </li>
            </ul>
          </div>

          {/* COLUMNA Back End */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-6">⚙️ Back End</h3>
            <ul className="text-gray-300 space-y-3 text-xl">
              <li className="flex items-center gap-3">
                <FaNodeJs className="text-green-500 text-4xl" /> Node.js
              </li>
              <li className="flex items-center gap-3">
                <SiCplusplus className="text-blue-600 text-4xl" /> C++
              </li>
              <li className="flex items-center gap-3">
                <SiPostgresql className="text-blue-500 text-4xl" /> Postgresql
              </li>
            </ul>
          </div>

          {/* COLUMAS Otros */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-6">🔧 Otros</h3>
            <ul className="text-gray-300 space-y-3 text-xl">
              <li className="flex items-center gap-3">
                 <SiGithub className="text-gray-100 text-4xl" /> GitHub & Git
              </li>
              <li className="flex items-center gap-3">
                <SiPostman className="text-orange-400 text-4xl" /> Postman
              </li>
              <li className="flex items-center gap-3">
                <FaWordpressSimple className="text-blue-600 text-4xl" /> WordPress
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TechStack;
