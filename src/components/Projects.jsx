import React from "react";
import marvelImage from "../assets/marvelapp.png"; 
import cdJemasa from "../assets/cdjemasa.png"; 

// Datos de proyectos (puedes agregar más)
const projects = [
    // Datos de los proyectos
    // Lista de proyectos en un array para que sea fácil agregar más.
    // Cada proyecto tiene un id, título, descripción, imagen, y enlaces para ver el proyecto y su código en GitHub.
  {
    id: 1,
    title: "Marvel App",
    description: "Aplicación que consume el API de Marvel para recupear y mostrar un catalogo de perosonajes",
    image: marvelImage,
    link: "https://marvela-pp.vercel.app/",
    repo: "https://github.com/Chris06ran/MarvelaPP",
  },
  {
    id: 2,
    title: "Página Web de Cía. Distribuidora Jema S.A.",
    description: "Sitio web de la empresa que incluye un catálogo de productos.",
    image: cdJemasa,
    link: "https://cdjemasa.com/",
    repo: "#",
  },
  {
    id: 3,
    title: "Portafolio Web",
    description: "Mi propio portafolio web hecho con React y Tailwind.",
    image: "https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2023/04/portafolio-programador.jpg",
    link: "#inicio",
    repo: "https://github.com/Chris06ran/portafolio-2025",
  },
];

function Projects() { //Crea un componente funcional llamado Projects.
  return (
    <section id="proyectos" className="bg-gray-900 text-white py-16 px-6">
         {/* <section>: Crea una sección independiente en la página.
            id="proyectos": Agrega un identificador para el enlace en el Navbar.
            className="bg-gray-900 text-white py-16 px-6": Estilos con Tailwind CSS:
            bg-gray-900 → Fondo gris oscuro.
            text-white → Texto en color blanco. 
            py-16 px-6 → Espaciado vertical (padding-y 16) y horizontal (padding-x 6). */}
      
      {/* Contenedor General */}
      <div className="container mx-auto max-w-5xl text-center">
      {/* container mx-auto:
      container → Limita el ancho para que no sea demasiado grande.
      mx-auto → Centra el contenido horizontalmente.
      max-w-5xl → Establece un máximo ancho de 5xl (≈80rem).
      text-center → Alinea el texto al centro.          */}
       
        {/* Título de la Sección */}
        <h2 className="text-4xl font-bold mb-10">Proyectos</h2>
            {/* text-4xl → Tamaño de texto grande (≈ 2.25rem).
            font-bold → Texto en negrita.
            mb-10 → Espacio en la parte inferior (margin-bottom). */}

         {/* Diseño con Grid */}
        <div className="grid md:grid-cols-3 gap-6"> 
            {/*
               grid → Activa el modo cuadrícula para organizar los proyectos.
               grid md:grid-cols-3 → Muestra los proyectos en una cuadrícula de 3 columnas en pantallas grandes.
               gap-6 → Espacio entre proyectos.       
            */}

           {/* Iteración sobre projects con .map()   */}
          {projects.map((project) => (
            //  projects.map((project) => (...)
            //  Recorre el array de projects y renderiza un <div> para cada proyecto.
            //  project representa cada objeto dentro del array.
            
            // Tarjeta de Proyecto
            <div
            // key={project.id} → Cada elemento en un .map() debe tener una clave única (key).
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                //   bg-gray-800 → Fondo oscuro para cada tarjeta.
                //   rounded-lg → Bordes redondeados.
                //   hover:scale-105 → Hace un pequeño zoom al pasar el mouse.
                //   p-4 → Padding interno.
                //   shadow-lg → Agrega una sombra.
                //   transition duration-300 → Hace que la animación dure 300ms.
            >  
               {/* Imagen del Proyecto */}
              <img
                src={project.image} //src={project.image} → Usa la imagen del objeto project.
                alt={project.title} //→ Agrega un texto alternativo (accesibilidad).
                className="w-full h-48 object-cover rounded-md"
                // Estilos con Tailwind:
                // w-full → La imagen ocupa el 100% del ancho del contenedor.
                // h-48 → Fija la altura en 48 unidades de Tailwind.
                // object-cover → Mantiene la proporción sin distorsionar.
                // rounded-md → Bordes ligeramente redondeados.
              />

              {/* Título y Descripción del Proyecto */}
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              {/* Título del Proyecto:
              text-2xl → Texto de tamaño grande.
              font-semibold → Texto seminegrita.
              mt-4 → Espaciado superior. */}

                {/* Descripción del Proyecto:
                text-gray-300 → Texto gris claro.
                mt-2 → Espaciado superior. */}

              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={project.link} //→ Enlace al proyecto.
                  target="_blank" //target="_blank" → Abre el enlace en una nueva pestaña.
                  rel="noopener noreferrer" //rel="noopener noreferrer" → Seguridad para evitar vulnerabilidades.
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                  //Estilos con Tailwind:
                  // bg-blue-500 → Fondo azul.
                  // hover:bg-blue-600 → Cambia a un azul más oscuro al pasar el mouse.
                  // text-white → Texto en color blanco.
                  // font-bold → Texto en negrita.
                  // py-2 px-4 → Padding.
                  // rounded-lg → Bordes redondeados.

                >
                  Ver Proyecto
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;