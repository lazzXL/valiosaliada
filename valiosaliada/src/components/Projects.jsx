import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import project1 from '../assets/projects/Project1.jpeg';
import project2 from '../assets/projects/Project2.jpeg';
import project3 from '../assets/projects/Project3.jpeg';
import project4 from '../assets/projects/Project4.jpeg';
import project5 from '../assets/projects/Project5.jpeg';
import project6 from '../assets/projects/Project6.jpeg';
import project7 from '../assets/projects/Project7.jpeg';
import project8 from '../assets/projects/Project8.jpeg';
import project9 from '../assets/projects/Project9.jpeg';
import project10 from '../assets/projects/Project10.jpeg';


const Projects = () => {
  const projectImages = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10
  ];

  return (
    <section id="projetos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Trabalhos Realizados</h2>
        
        <div className="relative">
                    <style jsx global>{`
            .projects-swiper .swiper-button-prev,
            .projects-swiper .swiper-button-next {
              color: #10b981 !important; /* Green-500 */
              background: rgba(255, 255, 255, 0.9);
              width: 44px;
              height: 44px;
              border-radius: 50%;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
            }
            
            .projects-swiper .swiper-button-prev:hover,
            .projects-swiper .swiper-button-next:hover {
              background: white;
              transform: scale(1.1);
            }
            
            .projects-swiper .swiper-button-prev::after,
            .projects-swiper .swiper-button-next::after {
              font-size: 24px !important;
              font-weight: bold;
            }
            
            .projects-swiper .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
              background: #d1fae5 !important; /* Light green */
              opacity: 1 !important;
            }
            
            .projects-swiper .swiper-pagination-bullet-active {
              background: #10b981 !important; /* Green-500 */
              transform: scale(1.2);
            }
          `}</style>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              
            }}
            className="projects-swiper"
          >
            {projectImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`Projeto ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;