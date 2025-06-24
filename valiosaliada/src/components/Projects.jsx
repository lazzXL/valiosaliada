import React from 'react';

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Trabalhos Realizados</h2>
        <div className="flex overflow-x-auto pb-8 space-x-4 scrollbar-hide">
          {[...Array(3)].map((_, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 h-64 bg-gray-300 rounded-lg flex items-center justify-center"
            >
              <p className="text-gray-600">Imagens de antigos projetos aqui</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;