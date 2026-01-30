import React from 'react';
import { Twitter, Linkedin, Github, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
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
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-primary-600 p-1.5 rounded-lg">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Nexus<span className="text-primary-600">Tech</span>
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Capacitando empresas com soluções de tecnologia de nível empresarial. Construindo o futuro digital, uma linha de código de cada vez.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">Início</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">Serviços</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">Sobre Nós</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">Política de Privacidade</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">Termos de Serviço</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">Política de Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Nexus Tech Solutions. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-500">
            <span>Feito para o exercício Services Pro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;