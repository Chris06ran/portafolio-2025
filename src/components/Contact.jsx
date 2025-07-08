import React, { useState } from "react";
import axios from "axios"; // Necesitas instalar axios para hacer peticiones HTTP

function Contact() {
  // Estados para manejar el formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para el mensaje de éxito o error
  const [statusMessage, setStatusMessage] = useState(""); // Cambiado a 'statusMessage' para englobar éxito/error

  // URL de Formspree para tu formulario (¡REEMPLAZA CON LA TUYA!)
  const FORMSPREE_URL = "https://formspree.io/f/meokbkbg"; 

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => { // Agregamos 'async' porque usaremos 'await'
    e.preventDefault();

    setStatusMessage("Enviando..."); // Muestra un mensaje de carga

    try {
      // Realiza una petición POST a la URL de Formspree con los datos del formulario
      const response = await axios.post(FORMSPREE_URL, formData);

      if (response.status === 200) { // Si la respuesta es exitosa (código 200 OK)
        setStatusMessage("¡Mensaje enviado con éxito! Te responderé pronto.");
        setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
      } else {
        // Manejar posibles errores devueltos por Formspree (aunque 200 es lo común para éxito)
        setStatusMessage("Hubo un problema al enviar el mensaje. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatusMessage("Error de conexión. Intenta de nuevo más tarde."); // Mensaje para errores de red/server
    }
  };

  return (
    <section id="contacto" className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-10">Contacto</h2>
        <p className="text-gray-300 mb-6">
          Si quieres contactarme, llena el formulario y te responderé pronto.
        </p>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left text-gray-300">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Enviar Mensaje
          </button>
        </form>

        {statusMessage && ( // Muestra el mensaje de estado (éxito o error)
            <p className={`mt-4 ${statusMessage.includes('éxito') ? 'text-green-400' : 'text-red-400'}`} >
                {statusMessage}
            </p>
        )}
      </div>
    </section>
  );
}

export default Contact;