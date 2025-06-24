import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 pb-10 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Excelência em Construção e Pintura em Bucelas
        </h1>
        <p className="text-xl text-white mb-8">Soluções completas para sua obra residencial ou comercial</p>
        <a 
          href="#contato" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Pedir Orçamento
        </a>
      </div>
    </section>
  );
};

export default Hero;