
import React from 'react';
import { Link } from 'react-router-dom';
import { News } from '../types';

interface NewsCardProps {
  newsItem: News;
}

export const NewsCard: React.FC<NewsCardProps> = ({ newsItem }) => {
  return (
    <Link to={`/news/${newsItem.id}`} className="block group bg-white rounded-lg shadow-lg overflow-hidden border border-brand-brown-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="overflow-hidden">
        <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <p className="text-sm text-brand-brown-600 mb-2">{newsItem.date} - {newsItem.author}</p>
        <h3 className="text-xl font-serif font-bold text-brand-brown-900 mb-3 group-hover:text-brand-brown-700 transition-colors">{newsItem.title}</h3>
        <p className="text-brand-brown-800 text-sm leading-relaxed">{newsItem.description}</p>
      </div>
    </Link>
  );
};
