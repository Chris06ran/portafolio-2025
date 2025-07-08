import React, { useState } from "react";

function Contact() {
  // Estados para manejar el formulario

    // useState({...}) → Creamos un estado llamado formData que almacena los datos ingresados en el formulario.
    // name, email, y message inician como cadenas vacías "".
    // setFormData es la función que usaremos para actualizar este estado.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  //successMessage almacenará un mensaje de éxito cuando el formulario se envíe correctamente.
  const [successMessage, setSuccessMessage] = useState("");

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    //   handleChange se ejecuta cada vez que el usuario escribe en un campo.
    //   e.target.name → Captura el nombre del campo (name, email, o message).
    //   e.target.value → Captura el nuevo valor que el usuario escribió.
    //   setFormData({ ...formData, [e.target.name]: e.target.value }) →
    //   Copiamos el estado anterior ...formData.
    //   Solo actualizamos el campo correspondiente sin modificar los otros.


  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();  //Evita que la página se recargue al enviar el formulario.
    console.log("Formulario enviado:", formData); //→ Muestra los datos en la consola (útil para depuración).
    setSuccessMessage("¡Mensaje enviado con éxito!"); //→ Muestra un mensaje de éxito.
    setFormData({ name: "", email: "", message: "" }); // Limpiar formulario, → Resetea los campos del formulario.
  };

  return (
    <section id="contacto" className="bg-gray-900 text-white py-16 px-6">
        {/* <section> → Contenedor de la sección con id="contacto".
           bg-gray-900 text-white → Fondo oscuro y texto blanco.
           py-16 px-6 → Añade espaciado vertical (py-16) y horizontal (px-6). */}


      <div className="container mx-auto max-w-3xl text-center">

      {/* container mx-auto → Centra el contenido en la página.
      max-w-3xl → Limita el ancho a un tamaño mediano.
      text-center → Alinea el contenido al centro. */}

        <h2 className="text-4xl font-bold mb-10">Contacto</h2>
        {/* text-4xl font-bold → Texto grande y en negrita.
        mb-10 → Margen inferior para separar elementos. */}

        <p className="text-gray-300 mb-6"> {/* Texto en gris claro (text-gray-300) para mejor legibilidad sobre fondo oscuro. */}
          Si quieres contactarme, llena el formulario y te responderé pronto.
        </p>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* onSubmit={handleSubmit} → Ejecuta la función handleSubmit al enviar el formulario.
            bg-gray-800 → Fondo oscuro del formulario.
            p-6 → Espaciado interno.
            rounded-lg shadow-lg → Bordes redondeados y sombra. */}

          <div className="mb-4"> {/*<label> → Etiqueta del campo de entrada. */}
            <label className="block text-left text-gray-300">Nombre</label>
            <input
              type="text" //→ Campo de texto.
              name="name" // → Identificador del campo.
              value={formData.name} //→ Muestra el valor del estado.
              onChange={handleChange} //→ Detecta cambios al escribir.
              required //→ Campo obligatorio.
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-300">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-300">Mensaje</label>
            <textarea //→ Campo más grande para escribir mensajes largos.
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4" //→ Define la altura del campo.
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit" //→ Activa el envío del formulario.
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" 
            //bg-blue-500 hover:bg-blue-600 → Color azul con efecto hover.
            //w-full → Ocupa todo el ancho.
          >
            Enviar Mensaje
          </button>
        </form>

        {successMessage && <p className="text-green-400 mt-4">{successMessage}</p>} 
         {/* Si successMessage tiene un valor, se muestra un mensaje en color verde (text-green-400). */}
      </div>
    </section>
  );
}

export default Contact;