
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown-900 text-brand-brown-200 mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-serif font-bold text-white">Di Sản Việt</h2>
            <p className="mt-2 text-sm">Khơi nguồn tri thức, gìn giữ tinh hoa.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Youtube</a>
            <a href="#" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
        <div className="mt-8 border-t border-brand-brown-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Di Sản Việt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
