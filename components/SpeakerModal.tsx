import React, { useEffect } from 'react';
import { Speaker } from '../types';

interface SpeakerModalProps {
  isOpen: boolean;
  onClose: () => void;
  speaker: Speaker | null;
  questionData?: { question?: string; loading: boolean; error?: string | null; };
  onGenerateQuestion: (speaker: Speaker) => void;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-brand-brown-600 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-brand-brown-600 animate-pulse [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 rounded-full bg-brand-brown-600 animate-pulse [animation-delay:0.4s]"></div>
        <span className="text-brand-brown-700 text-sm font-medium">AI đang suy nghĩ...</span>
    </div>
);

export const SpeakerModal: React.FC<SpeakerModalProps> = ({ isOpen, onClose, speaker, questionData, onGenerateQuestion }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen || !speaker) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="speaker-name"
    >
      <div 
        className="bg-brand-brown-50 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 animate-slide-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-brand-brown-600 hover:text-brand-brown-900 transition-colors z-10"
          aria-label="Đóng"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-0 md:pr-0">
                 <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-full object-cover md:rounded-l-xl"/>
            </div>
            <div className="p-8 flex flex-col">
                <h2 id="speaker-name" className="text-3xl font-serif font-bold text-brand-brown-900">{speaker.name}</h2>
                <p className="text-md text-brand-brown-700 font-semibold mb-4">{speaker.title}</p>
                <p className="text-brand-brown-800 leading-relaxed text-sm flex-grow">{speaker.bio}</p>
                
                <div className="mt-8 pt-6 border-t border-brand-brown-200">
                    <h3 className="text-sm font-bold text-brand-brown-800 mb-3 tracking-wider uppercase">Góc nhìn từ AI</h3>
                    
                    {questionData?.loading && <LoadingSpinner />}
                    
                    {questionData?.error && <p className="text-red-600 text-sm">{questionData.error}</p>}

                    {questionData?.question && (
                         <blockquote className="border-l-4 border-brand-brown-700 pl-4 italic text-brand-brown-800">
                           <p>"{questionData.question}"</p>
                         </blockquote>
                    )}
                    
                    {!questionData && (
                        <button 
                            onClick={() => onGenerateQuestion(speaker)}
                            className="bg-brand-brown-800 text-white font-bold py-2 px-4 rounded-md hover:bg-brand-brown-900 transition-colors duration-300 w-full text-sm"
                        >
                           Tạo câu hỏi phỏng vấn
                        </button>
                    )}
                </div>
            </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-up {
          from { transform: translateY(20px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-in-up { animation: slide-in-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};
