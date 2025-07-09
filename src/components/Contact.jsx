import React, { useState } from "react";
import axios from "axios";

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
        <p className=" text-lg text-gray-200 mb-6">
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

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
  <button
    type="submit"
    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
  >
        Enviar Mensaje
      </button>

      <a
        href="https://wa.me/50767932357?text=Hola,%20quiero%20contactarte%20desde%20tu%20portafolio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0a11.9 11.9 0 0 0-8.52 3.48A11.9 11.9 0 0 0 0 12c0 2.1.54 4.14 1.56 5.94L0 24l6.24-1.56A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.18-1.23-6.17-3.48-8.52zM12 22c-1.74 0-3.45-.45-4.95-1.32l-.36-.21-3.69.93.99-3.6-.24-.36A9.9 9.9 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.28-7.32c-.3-.15-1.77-.87-2.04-.96-.27-.09-.48-.15-.69.15s-.78.96-.96 1.17-.36.21-.66.06a8.26 8.26 0 0 1-2.46-1.53 9.3 9.3 0 0 1-1.74-2.1c-.18-.3 0-.45.12-.6.12-.12.27-.3.39-.45.12-.15.18-.27.27-.45.09-.18.06-.33 0-.48-.06-.15-.69-1.65-.96-2.28-.24-.57-.48-.48-.69-.48H7.5c-.21 0-.54.06-.81.39-.27.33-1.05 1.02-1.05 2.49 0 1.47 1.08 2.88 1.23 3.09.15.21 2.13 3.27 5.19 4.59.73.33 1.29.54 1.74.69.72.24 1.38.21 1.89.12.57-.09 1.77-.72 2.01-1.41.24-.69.24-1.29.18-1.41-.06-.12-.27-.18-.57-.33z" />
        </svg>
        WhatsApp
      </a>
    </div>

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