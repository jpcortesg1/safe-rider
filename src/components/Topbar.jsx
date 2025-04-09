import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import {
  FaHome,
  FaShoppingCart,
  FaTags,
  FaGift,
  FaFire,
  FaStore,
  FaQuestionCircle,
  FaUserCircle,
  FaSignOutAlt,
} from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Topbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const logout = useAuthStore((state) => state.logout);

  const menuItems = [
    { icon: FaHome, label: 'Inicio', path: '/' },
    { icon: FaShoppingCart, label: 'Carrito', path: '/cart' },
    { icon: FaTags, label: 'Categorías', path: '/categories' },
    { icon: FaGift, label: 'Ofertas', path: '/offers' },
    { icon: FaStore, label: 'Cupones', path: '/coupons' },
    { icon: FaFire, label: 'Lo más vendido', path: '/best-sellers' },
    { icon: FaStore, label: 'Vender', path: '/sell' },
    { icon: FaQuestionCircle, label: 'Ayuda', path: '/help' },
  ];

  return (
    <nav className="bg-sr-dark border-b border-sr-yellow/20 px-4 py-2 flex items-center justify-between fixed w-full top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-sr-yellow hover:text-sr-red transition-colors">
        <img 
          src={logo} 
          alt="Safe Rider Logo" 
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="font-bold text-xl">SAFE RIDER</span>
      </Link>

      {/* Navigation Items */}
      <div className="flex items-center gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="text-sr-text hover:text-sr-yellow transition-colors flex items-center gap-1"
          >
            <item.icon className="text-sm" />
            <span>{item.label}</span>
          </Link>
        ))}

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="text-sr-text hover:text-sr-yellow transition-colors flex items-center gap-1"
          >
            <FaUserCircle className="text-xl" />
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-sr-dark border border-sr-yellow/20 rounded-lg shadow-lg py-1 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sr-text hover:bg-sr-yellow/10 hover:text-sr-yellow
                         transition-colors flex items-center gap-2"
              >
                <FaUserCircle />
                Perfil
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsUserMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sr-text hover:bg-sr-yellow/10 hover:text-sr-yellow
                         transition-colors flex items-center gap-2"
              >
                <FaSignOutAlt />
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Topbar; 