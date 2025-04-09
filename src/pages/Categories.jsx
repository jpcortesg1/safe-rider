import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
  FaMotorcycle,
  FaShieldAlt,
  FaTools,
  FaShoePrints,
  FaSearch,
  FaFilter,
  FaStar,
  FaShoppingCart,
  FaChevronRight,
  FaTshirt,
  FaHardHat
} from 'react-icons/fa';
import { GiFullMotorcycleHelmet, GiMonclerJacket } from 'react-icons/gi';

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    priceRange: 'all',
    rating: 'all',
    brand: 'all'
  });

  // Datos de categorías principales con subcategorías
  const categories = [
    {
      id: 1,
      name: 'Protección para la Cabeza',
      icon: GiFullMotorcycleHelmet,
      description: 'Equipamiento esencial para la protección craneal',
      subcategories: [
        {
          id: 'sub1',
          name: 'Cascos Integrales',
          products: [
            {
              id: 'p1',
              name: 'Casco AGV Pista GP RR',
              price: 999.99,
              rating: 4.9,
              image: 'https://picsum.photos/400/300',
              brand: 'AGV',
              features: ['Fibra de carbono', 'Sistema de ventilación', 'Pinlock incluido']
            },
            // ... más productos
          ]
        },
        {
          id: 'sub2',
          name: 'Cascos Modulares',
          products: []
        },
        {
          id: 'sub3',
          name: 'Viseras y Accesorios',
          products: []
        },
        {
          id: 'sub4',
          name: 'Intercomunicadores',
          products: []
        }
      ]
    },
    {
      id: 2,
      name: 'Protección Corporal',
      icon: GiMonclerJacket,
      description: 'Equipamiento para proteger el torso y extremidades',
      subcategories: [
        {
          id: 'sub5',
          name: 'Chaquetas Protectoras',
          products: []
        },
        {
          id: 'sub6',
          name: 'Protectores de Espalda',
          products: []
        },
        {
          id: 'sub7',
          name: 'Airbags para Moto',
          products: []
        }
      ]
    },
    {
      id: 3,
      name: 'Protección para Extremidades',
      icon: FaShieldAlt,
      description: 'Equipamiento específico para brazos y piernas',
      subcategories: [
        {
          id: 'sub8',
          name: 'Guantes',
          products: []
        },
        {
          id: 'sub9',
          name: 'Protectores de Rodilla',
          products: []
        },
        {
          id: 'sub10',
          name: 'Protectores de Codo',
          products: []
        }
      ]
    },
    {
      id: 4,
      name: 'Calzado Especializado',
      icon: FaShoePrints,
      description: 'Botas y calzado de seguridad para motociclistas',
      subcategories: [
        {
          id: 'sub11',
          name: 'Botas de Carretera',
          products: []
        },
        {
          id: 'sub12',
          name: 'Botas Adventure',
          products: []
        },
        {
          id: 'sub13',
          name: 'Calzado Urbano',
          products: []
        }
      ]
    },
    {
      id: 5,
      name: 'Equipamiento Técnico',
      icon: FaTools,
      description: 'Accesorios y herramientas de seguridad',
      subcategories: [
        {
          id: 'sub14',
          name: 'Luces LED',
          products: []
        },
        {
          id: 'sub15',
          name: 'Reflectantes',
          products: []
        },
        {
          id: 'sub16',
          name: 'Sistemas de Monitoreo',
          products: []
        }
      ]
    },
    {
      id: 6,
      name: 'Ropa Técnica',
      icon: FaTshirt,
      description: 'Vestimenta especializada para la conducción',
      subcategories: [
        {
          id: 'sub17',
          name: 'Ropa Térmica',
          products: []
        },
        {
          id: 'sub18',
          name: 'Ropa Impermeable',
          products: []
        },
        {
          id: 'sub19',
          name: 'Protección UV',
          products: []
        }
      ]
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg overflow-hidden
                    hover:border-sr-yellow transition-all duration-300 group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-sr-red text-sr-text text-xs px-3 py-1 rounded-full">
          {product.brand}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sr-yellow font-semibold mb-2 truncate">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center text-sr-yellow">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.floor(product.rating) ? 'text-sr-yellow' : 'text-sr-yellow/20'}
              />
            ))}
          </div>
          <span className="text-sr-text/60 text-sm">({product.rating})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-sr-yellow font-bold text-xl">
            ${product.price}
          </span>
        </div>

        <button className="w-full bg-sr-yellow text-sr-dark px-4 py-2 rounded-lg font-medium
                         hover:bg-sr-red hover:text-sr-text transition-colors duration-300
                         flex items-center justify-center gap-2">
          <FaShoppingCart />
          Comprar
        </button>
      </div>
    </div>
  );

  const FilterSection = () => (
    <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-4 mb-6">
      <h3 className="text-sr-yellow font-semibold mb-4 flex items-center gap-2">
        <FaFilter />
        Filtros
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-sr-text/80 block mb-2">Rango de Precio</label>
          <select 
            className="w-full bg-sr-dark border border-sr-yellow/20 rounded-lg p-2 text-sr-text"
            value={activeFilters.priceRange}
            onChange={(e) => setActiveFilters({...activeFilters, priceRange: e.target.value})}
          >
            <option value="all">Todos los precios</option>
            <option value="0-100">$0 - $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500+">$500+</option>
          </select>
        </div>

        <div>
          <label className="text-sr-text/80 block mb-2">Calificación</label>
          <select 
            className="w-full bg-sr-dark border border-sr-yellow/20 rounded-lg p-2 text-sr-text"
            value={activeFilters.rating}
            onChange={(e) => setActiveFilters({...activeFilters, rating: e.target.value})}
          >
            <option value="all">Todas las calificaciones</option>
            <option value="4+">4+ estrellas</option>
            <option value="3+">3+ estrellas</option>
            <option value="2+">2+ estrellas</option>
          </select>
        </div>

        <div>
          <label className="text-sr-text/80 block mb-2">Marca</label>
          <select 
            className="w-full bg-sr-dark border border-sr-yellow/20 rounded-lg p-2 text-sr-text"
            value={activeFilters.brand}
            onChange={(e) => setActiveFilters({...activeFilters, brand: e.target.value})}
          >
            <option value="all">Todas las marcas</option>
            <option value="AGV">AGV</option>
            <option value="Shoei">Shoei</option>
            <option value="Alpinestars">Alpinestars</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header y Búsqueda */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-sr-yellow mb-4 flex items-center gap-3">
            <FaMotorcycle className="text-3xl" />
            Categorías de Seguridad
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full bg-sr-dark/30 border border-sr-yellow/20 rounded-lg py-3 px-4 pl-12
                       text-sr-text placeholder-sr-text/60 focus:outline-none focus:border-sr-yellow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sr-text/60" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar con Filtros */}
          <div className="lg:col-span-1">
            <FilterSection />
            
            {/* Lista de Categorías */}
            <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-4">
              <h3 className="text-sr-yellow font-semibold mb-4">Categorías</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`w-full text-left p-3 rounded-lg flex items-center justify-between
                             ${selectedCategory?.id === category.id 
                               ? 'bg-sr-yellow text-sr-dark' 
                               : 'text-sr-text hover:bg-sr-dark/50'}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <div className="flex items-center gap-2">
                      <category.icon />
                      <span>{category.name}</span>
                    </div>
                    <FaChevronRight className={`transition-transform ${
                      selectedCategory?.id === category.id ? 'rotate-90' : ''
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="lg:col-span-3">
            {selectedCategory ? (
              <div>
                <h2 className="text-2xl font-semibold text-sr-yellow mb-4">
                  {selectedCategory.name}
                </h2>
                <p className="text-sr-text/80 mb-6">{selectedCategory.description}</p>

                {/* Subcategorías */}
                {selectedCategory.subcategories.map((subcategory) => (
                  <div key={subcategory.id} className="mb-8">
                    <h3 className="text-xl font-semibold text-sr-yellow mb-4">
                      {subcategory.name}
                    </h3>
                    {subcategory.products && subcategory.products.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {subcategory.products.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-sr-text/60 italic">
                        No hay productos disponibles en esta subcategoría.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-sr-text/60 py-12">
                <FaMotorcycle className="text-6xl mx-auto mb-4" />
                <p className="text-xl">
                  Selecciona una categoría para ver los productos disponibles
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Categories; 