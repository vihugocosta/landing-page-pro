import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-800">
              <img 
                src="https://picsum.photos/800/600" 
                alt="Nossa Equipe" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-3xl font-bold">Desde 2020</p>
                <p className="text-sm opacity-90">Entregando Excelência</p>
              </div>
            </div>
            {/* Floating Card */}
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 p-6 rounded-xl shadow-xl max-w-xs border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">98% de Sucesso</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Taxa de Satisfação do Cliente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Sobre a Nexus Tech
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Impulsionando a Transformação Digital para um Amanhã Melhor
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Fundada em 2020, a Nexus Tech começou com uma visão simples: preencher a lacuna entre tecnologia complexa e necessidades de negócios. Acreditamos que a tecnologia deve ser um facilitador, não uma barreira.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Target size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Nossa Missão</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Capacitar organizações com soluções de TI escaláveis, seguras e inteligentes que promovam a inovação e o crescimento sustentável.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                    <Heart size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Nossos Valores</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Priorizamos Integridade, Design Centrado no Usuário e Inovação Contínua em cada linha de código que escrevemos.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;