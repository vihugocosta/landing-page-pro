import React from 'react';
import { Code, Cloud, Lock, BarChart, Smartphone, Database } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Software Personalizado",
    description: "Soluções de software sob medida projetadas para otimizar seus processos de negócios específicos e aumentar a produtividade.",
    icon: Code
  },
  {
    id: 2,
    title: "Infraestrutura em Nuvem",
    description: "Serviços seguros e escaláveis de migração, gerenciamento e arquitetura em nuvem usando AWS, Azure e Google Cloud.",
    icon: Cloud
  },
  {
    id: 3,
    title: "Segurança Cibernética",
    description: "Auditorias de segurança abrangentes, monitoramento de ameaças e estratégias de proteção de dados para proteger seus ativos.",
    icon: Lock
  },
  {
    id: 4,
    title: "Análise de Dados e IA",
    description: "Transforme dados brutos em insights acionáveis com nossas ferramentas avançadas de aprendizado de máquina e inteligência de negócios.",
    icon: BarChart
  },
  {
    id: 5,
    title: "Desenvolvimento Mobile",
    description: "Aplicativos móveis nativos e multiplataforma que proporcionam experiências de usuário perfeitas em iOS e Android.",
    icon: Smartphone
  },
  {
    id: 6,
    title: "Gestão de Banco de Dados",
    description: "Design, otimização e manutenção de banco de dados de alto desempenho, garantindo integridade e velocidade dos dados.",
    icon: Database
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Nossa Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Soluções de TI de Alto Desempenho
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Utilizamos as tecnologias mais recentes para resolver desafios complexos e impulsionar o crescimento dos negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-8 bg-gray-50 dark:bg-dark-800 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-white dark:bg-dark-900 rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;