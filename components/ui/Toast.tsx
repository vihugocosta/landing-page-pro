import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-24 right-4 md:right-8 z-50 animate-fade-in-down">
      <div className="bg-white dark:bg-dark-800 border-l-4 border-green-500 shadow-xl rounded-md p-4 flex items-center gap-3 pr-10 relative max-w-sm">
        <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
        <p className="text-gray-800 dark:text-white font-medium text-sm">{message}</p>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;