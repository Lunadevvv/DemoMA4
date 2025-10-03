
import React, { useState, useMemo } from 'react';
import { EventCard } from '../components/EventCard';
import { events } from '../data';

export const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = useMemo(() => {
    return events.filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="bg-brand-brown-50 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif font-bold text-brand-brown-900 text-center mb-8">Tất Cả Sự Kiện</h1>
        
        <div className="mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Tìm kiếm sự kiện..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border-2 border-brand-brown-200 rounded-lg focus:ring-2 focus:ring-brand-brown-700 focus:border-brand-brown-700 outline-none transition-shadow"
          />
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-center text-brand-brown-700 mt-12">Không tìm thấy sự kiện nào phù hợp.</p>
        )}
      </div>
    </div>
  );
};
