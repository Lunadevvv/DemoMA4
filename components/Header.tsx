
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  const activeLinkClass = "text-white bg-brand-brown-700";
  const inactiveLinkClass = "text-brand-brown-200 hover:text-white hover:bg-brand-brown-700/50";

  return (
    <header className="bg-brand-brown-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-white">
          Di Sản Việt
        </Link>
        <nav>
          <ul className="flex items-center space-x-2">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Trang Chủ
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/news" 
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Tin Tức
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/events" 
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Sự Kiện
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
