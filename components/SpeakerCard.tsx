import React from 'react';
import { Speaker } from '../types';

interface SpeakerCardProps {
  speaker: Speaker;
  onClick: () => void;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="w-full text-left group bg-white rounded-lg shadow-lg overflow-hidden border border-brand-brown-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-brown-700"
      aria-label={`Xem chi tiết về ${speaker.name}`}
    >
      <div className="overflow-hidden">
        <img 
          src={speaker.imageUrl} 
          alt={speaker.name} 
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-serif font-bold text-brand-brown-900 mb-1 group-hover:text-brand-brown-700 transition-colors">{speaker.name}</h3>
        <p className="text-brand-brown-700 text-sm">{speaker.title}</p>
      </div>
    </button>
  );
};
