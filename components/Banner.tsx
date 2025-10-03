
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../types';

interface BannerProps {
  featuredEvents: Event[];
}

export const Banner: React.FC<BannerProps> = ({ featuredEvents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredEvents.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuredEvents.length]);

  if (!featuredEvents.length) {
    return null;
  }

  const currentEvent = featuredEvents[currentIndex];

  return (
    <div className="relative w-full h-[60vh] text-white overflow-hidden">
      {featuredEvents.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}
      
      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-start z-10">
        <h1 className="text-5xl font-serif font-bold mb-4 max-w-2xl leading-tight animate-fade-in-down">
          {currentEvent.title}
        </h1>
        <p className="text-lg mb-8 max-w-2xl animate-fade-in-up">
          {currentEvent.description}
        </p>
        <Link 
          to={`/events/${currentEvent.id}`} 
          className="bg-brand-brown-700 hover:bg-brand-brown-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
        >
          Xem Chi Tiết
        </Link>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {featuredEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
