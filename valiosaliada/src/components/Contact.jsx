import React, { useState, useRef } from 'react';

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const accessKey = '48c51522-472a-4e64-80f0-ffa2faddf6fd';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: 'Novo Pedido de Orçamento - Valiosaliada',
          from_name: 'Valiosaliada Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        console.log('Form submitted successfully:', result);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        console.error('Form submission failed:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:flex">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Solicite Seu Orçamento</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                <strong>Sucesso!</strong> Pedido de orçamento enviado. Entraremos em contacto brevemente.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                <strong>Erro!</strong> Ocorreu um problema ao enviar o seu pedido. Por favor, tente novamente.
              </div>
            )}
            
            <form 
              ref={formRef}
              className="space-y-4" 
              onSubmit={handleSubmit}
            >
              <input 
                type="checkbox" 
                name="botcheck" 
                className="hidden" 
                style={{display: 'none'}}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Nome completo" 
                  className="w-full p-3 border rounded-lg"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className="w-full p-3 border rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Telefone" 
                  className="w-full p-3 border rounded-lg"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <select 
                  name="service"
                  className="w-full p-3 border rounded-lg" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Selecione o serviço</option>
                  <option value="Construção Civil">Construção Civil</option>
                  <option value="Renovações">Renovações</option>
                  <option value="Pintura">Pintura</option>
                </select>
              </div>
              <textarea 
                rows="4" 
                name="message"
                placeholder="Descreva o seu projeto..." 
                className="w-full p-3 border rounded-lg"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
              
              <button 
                type="submit"
                className={`bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : 'Enviar Pedido'}
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 lg:pl-12 mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold mb-6">Contactos</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +351 910 559 234
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                valiosaliada@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;