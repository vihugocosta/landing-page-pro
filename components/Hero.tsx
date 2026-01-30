import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-semibold text-sm mb-6 border border-primary-100 dark:border-primary-800">
            <ShieldCheck size={16} />
            <span>Confiança de mais de 500 empresas</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
            Soluções de TI Escaláveis para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
              Empresas Modernas
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Transformamos negócios através de software inovador, infraestrutura em nuvem robusta e segurança cibernética de ponta. Construa seu futuro com a Nexus Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 focus:ring-offset-white dark:focus:ring-offset-gray-900 cursor-pointer"
            >
              Comece Agora
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 dark:text-gray-200 transition-all duration-200 bg-white dark:bg-dark-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 cursor-pointer"
            >
              Explorar Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;