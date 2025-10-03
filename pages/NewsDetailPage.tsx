
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { news } from '../data';

export const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = news.find(n => n.id === id);

  if (!newsItem) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="bg-white">
      <div className="relative h-96">
        <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-serif font-bold text-white text-center px-4">{newsItem.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pb-4 border-b border-brand-brown-200 text-center">
            <p className="text-lg text-brand-brown-700 font-semibold">{newsItem.date}</p>
            <p className="text-md text-brand-brown-600">Tác giả: {newsItem.author}</p>
          </div>

          <article className="prose prose-lg max-w-none text-brand-brown-800">
            <p className="lead">{newsItem.description}</p>
            <p>{newsItem.content}</p>
          </article>
        </div>
      </div>
    </div>
  );
};
