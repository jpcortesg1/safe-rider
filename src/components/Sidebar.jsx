import React from 'react';
import { FaSearch, FaFilter, FaTag, FaStar, FaDollarSign, FaShoppingBag } from 'react-icons/fa';

const Sidebar = () => {
  const priceRanges = [
    'Menos de $50',
    '$50 - $100',
    '$100 - $200',
    '$200 - $500',
    'Más de $500'
  ];

  const ratings = [5, 4, 3, 2, 1];

  return (
    <aside className="w-64 bg-sr-dark border-r border-sr-yellow/20 h-full overflow-y-auto">
      <div className="p-4">
        {/* Búsqueda */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full pl-10 pr-4 py-2 bg-sr-dark/50 border border-sr-yellow/20 rounded-lg
                     text-sr-text placeholder-sr-text/50 focus:outline-none focus:border-sr-yellow"
          />
          <FaSearch className="absolute left-3 top-3 text-sr-yellow/50" />
        </div>

        {/* Categorías */}
        <div className="mb-6">
          <h3 className="text-sr-yellow font-semibold mb-3 flex items-center gap-2">
            <FaTag className="text-sr-yellow" /> Categorías
          </h3>
          <div className="space-y-2">
            {['Cascos', 'Chaquetas', 'Guantes', 'Botas', 'Accesorios'].map((category) => (
              <label key={category} className="flex items-center text-sr-text cursor-pointer hover:text-sr-yellow">
                <input type="checkbox" className="mr-2 accent-sr-yellow" />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Rango de Precios */}
        <div className="mb-6">
          <h3 className="text-sr-yellow font-semibold mb-3 flex items-center gap-2">
            <FaDollarSign className="text-sr-yellow" /> Rango de Precios
          </h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range} className="flex items-center text-sr-text cursor-pointer hover:text-sr-yellow">
                <input type="radio" name="price" className="mr-2 accent-sr-yellow" />
                {range}
              </label>
            ))}
          </div>
        </div>

        {/* Calificación */}
        <div className="mb-6">
          <h3 className="text-sr-yellow font-semibold mb-3 flex items-center gap-2">
            <FaStar className="text-sr-yellow" /> Calificación
          </h3>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label key={rating} className="flex items-center text-sr-text cursor-pointer hover:text-sr-yellow">
                <input type="checkbox" className="mr-2 accent-sr-yellow" />
                <div className="flex items-center">
                  {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} className="text-sr-yellow text-sm" />
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <FaStar key={i} className="text-sr-yellow/20 text-sm" />
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Estado */}
        <div className="mb-6">
          <h3 className="text-sr-yellow font-semibold mb-3 flex items-center gap-2">
            <FaShoppingBag className="text-sr-yellow" /> Estado
          </h3>
          <div className="space-y-2">
            {['Nuevo', 'Usado - Como nuevo', 'Usado - Buen estado'].map((condition) => (
              <label key={condition} className="flex items-center text-sr-text cursor-pointer hover:text-sr-yellow">
                <input type="checkbox" className="mr-2 accent-sr-yellow" />
                {condition}
              </label>
            ))}
          </div>
        </div>

        {/* Botón de Filtrar */}
        <button className="w-full bg-sr-yellow text-sr-dark font-semibold py-2 rounded-lg
                         hover:bg-sr-red hover:text-sr-text transition-colors duration-300
                         flex items-center justify-center gap-2">
          <FaFilter />
          Aplicar Filtros
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 