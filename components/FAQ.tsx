import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Em quais indústrias vocês se especializam?",
    answer: "Embora tenhamos raízes profundas em FinTech e Saúde, nossas soluções de TI adaptáveis são projetadas para atender aos setores de Varejo, Manufatura, Logística e Educação de forma eficaz."
  },
  {
    id: 2,
    question: "Como vocês lidam com a segurança de dados?",
    answer: "Segurança é nossa prioridade máxima. Implementamos criptografia padrão da indústria, testes regulares de penetração e conformidade estrita com a LGPD, GDPR e outros padrões para todos os nossos projetos."
  },
  {
    id: 3,
    question: "Vocês oferecem suporte pós-lançamento?",
    answer: "Sim, oferecemos vários pacotes de suporte e manutenção. Desde monitoramento crítico 24/7 até atualizações mensais de recursos, garantimos que seu software permaneça robusto e atualizado."
  },
  {
    id: 4,
    question: "Qual é o prazo típico de um projeto?",
    answer: "Os prazos variam de acordo com a complexidade. Uma aplicação web padrão geralmente leva de 8 a 12 semanas, enquanto sistemas empresariais complexos podem levar mais de 6 meses. Fornecemos um roteiro detalhado durante a consulta inicial."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Tem dúvidas? Nós temos as respostas. Se não encontrar sua pergunta aqui, entre em contato conosco.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex justify-between items-center p-5 bg-gray-50 dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors focus:outline-none"
              >
                <span className="text-left font-semibold text-gray-900 dark:text-gray-200">
                  {item.question}
                </span>
                {openIndex === item.id ? (
                  <ChevronUp className="w-5 h-5 text-primary-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 bg-white dark:bg-dark-900 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;