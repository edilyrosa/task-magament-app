import React, { useState } from "react";

const Contact = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [gmair, setGmair] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <section id="contact" className="section py-8 bg-white text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-8">Suscríbete</h2>
        {!isSubscribed ? (
          <form
            onSubmit={handleSubmit}
            className="contact-form max-w-lg mx-auto"
          >
            <label htmlFor="email" className="block text-left mb-2">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              onChange={(e) => {
                setGmair(e.target.value);
              }}
              required
            />
          
            <button
              type="submit"
              className="bg-[#ff3a9c] hover:bg-[#ff3a9c77] text-white font-bold py-2 px-4 rounded"
            >
              Suscribir
            </button>
          </form>
        ) : (
          <p className="text-xl font-semibold text-green-500">
            Hola {gmair}, ¡Te has suscrito exitosamente!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
