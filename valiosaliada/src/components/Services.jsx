import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Construção Civil",
      description: "Edificação completa desde a fundação até ao acabamento final, com materiais de primeira qualidade."
    },
    {
      title: "Renovações",
      description: "Transformação de espaços com técnicas modernas e respeito pelo património existente."
    },
    {
      title: "Pinturas",
      description: "Serviços profissionais de pintura interior e exterior com garantia de durabilidade."
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;