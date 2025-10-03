
import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`} className="block group bg-white rounded-lg shadow-lg overflow-hidden border border-brand-brown-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="overflow-hidden">
        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <p className="text-sm text-brand-brown-600 mb-2">{event.date} - {event.location}</p>
        <h3 className="text-xl font-serif font-bold text-brand-brown-900 mb-3 group-hover:text-brand-brown-700 transition-colors">{event.title}</h3>
        <p className="text-brand-brown-800 text-sm leading-relaxed">{event.description}</p>
      </div>
    </Link>
  );
};
