import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Toast from './ui/Toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const tempErrors: Errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Nome é obrigatório';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'E-mail é obrigatório';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'E-mail inválido';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Mensagem é obrigatória';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        // Hide toast after 3 seconds
        setTimeout(() => setShowToast(false), 3000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-950">
      {showToast && <Toast message="Mensagem enviada com sucesso! Entraremos em contato em breve." onClose={() => setShowToast(false)} />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Fale Conosco
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Vamos Iniciar uma Conversa
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="col-span-1 bg-white dark:bg-dark-900 rounded-2xl shadow-lg p-8 h-fit">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Entre em Contato</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">E-mail</p>
                  <p className="text-gray-600 dark:text-gray-400">ola@nexustech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Telefone</p>
                  <p className="text-gray-600 dark:text-gray-400">+55 (11) 91234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg text-primary-600 dark:text-primary-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Escritório</p>
                  <p className="text-gray-600 dark:text-gray-400">Av. Paulista, 1000, São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-1 lg:col-span-2 bg-white dark:bg-dark-900 rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-800 border ${
                      errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white outline-none transition-all`}
                    placeholder="João Silva"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Endereço de E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-800 border ${
                      errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white outline-none transition-all`}
                    placeholder="joao@exemplo.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-800 border ${
                    errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white outline-none transition-all resize-none`}
                  placeholder="Como podemos ajudar você?"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <>Processando...</>
                ) : (
                  <>
                    Enviar Mensagem <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;