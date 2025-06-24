import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Pedido de orçamento enviado! Entraremos em contacto brevemente.');
  };

  return (
    <section id="contato" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:flex">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Solicite Seu Orçamento</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nome completo" 
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Telefone" 
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <select className="w-full p-3 border rounded-lg" required>
                  <option value="">Selecione o serviço</option>
                  <option>Construção Civil</option>
                  <option>Renovações</option>
                  <option>Pintura</option>
                </select>
              </div>
              <textarea 
                rows="4" 
                placeholder="Descreva o seu projeto..." 
                className="w-full p-3 border rounded-lg"
                required
              ></textarea>
              <button 
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
              >
                Enviar Pedido
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 lg:pl-12 mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold mb-6">Contactos</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Rua Principal, 123 - Bucelas, Portugal
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +351 219 000 000
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                orcamentos@valiosaliada.pt
              </p>
              <div className="text-gray-600 mt-4">
                <p className="font-medium">Horário de Funcionamento:</p>
                <p>Seg-Sex: 08:00 - 18:00</p>
                <p>Sábado: 08:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;