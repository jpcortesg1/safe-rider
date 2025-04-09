import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import useCartStore from '../store/cartStore';
import {
  FaMotorcycle,
  FaShieldAlt,
  FaStar,
  FaArrowRight,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
  FaUmbrella,
  FaLightbulb,
  FaHardHat,
  FaShoePrints,
  FaInfoCircle,
} from 'react-icons/fa';
import { GiFullMotorcycleHelmet, GiMonclerJacket, GiKneePad } from 'react-icons/gi';

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const addItem = useCartStore(state => state.addItem);
  const itemsPerPage = 8;

  // Datos simulados de productos destacados
  const featuredProducts = [
    {
      id: 1,
      name: 'Casco AGV Pista GP RR',
      price: 999.99,
      rating: 4.9,
      image: 'https://picsum.photos/400/300',
      brand: 'AGV',
      category: 'Cascos',
      description: 'Casco de alta gama con tecnología de Fórmula 1',
      discount: 15,
    },
    {
      id: 2,
      name: 'Chaqueta Alpinestars GP Plus R v3',
      price: 599.99,
      rating: 4.8,
      image: 'https://picsum.photos/400/301',
      brand: 'Alpinestars',
      category: 'Chaquetas',
      description: 'Protección superior con estilo deportivo',
      discount: 10,
    },
    {
      id: 3,
      name: 'Botas Touring Forma Adventure',
      price: 259.99,
      rating: 4.7,
      image: 'https://picsum.photos/400/302',
      brand: 'Forma',
      category: 'Calzado',
      description: 'Impermeables y resistentes para largas travesías',
    },
    {
      id: 4,
      name: 'Kit de Luces LED Auxiliares',
      price: 199.99,
      rating: 4.6,
      image: 'https://picsum.photos/400/303',
      brand: 'PIAA',
      category: 'Iluminación',
      description: 'Mayor visibilidad en condiciones adversas',
      discount: 20,
    },
  ];

  // Datos de aseguradoras
  const insuranceCompanies = [
    {
      id: 1,
      name: 'SeguroMoto Plus',
      logo: 'https://picsum.photos/200/100',
      description: 'Cobertura integral para ti y tu moto',
      features: ['Asistencia 24/7', 'Cobertura de equipamiento', 'Grúa ilimitada'],
      rating: 4.8,
    },
    {
      id: 2,
      name: 'MotoProtect',
      logo: 'https://picsum.photos/200/101',
      description: 'Especialistas en seguros para motociclistas',
      features: ['Cobertura internacional', 'Robo de equipamiento', 'Accidentes personales'],
      rating: 4.7,
    },
    {
      id: 3,
      name: 'BikerGuard',
      logo: 'https://picsum.photos/200/102',
      description: 'Tu seguridad es nuestra prioridad',
      features: ['Daños a terceros', 'Robo total', 'Asistencia médica'],
      rating: 4.9,
    },
  ];

  // Datos de productos paginados
  const generateProducts = (page) => {
    const products = [];
    const startId = (page - 1) * itemsPerPage + 1;
    
    for (let i = 0; i < itemsPerPage; i++) {
      products.push({
        id: startId + i,
        name: `Producto de Seguridad ${startId + i}`,
        price: Math.floor(Math.random() * 900) + 100,
        rating: (Math.random() * 2 + 3).toFixed(1),
        image: `https://picsum.photos/400/${300 + startId + i}`,
        brand: ['AGV', 'Alpinestars', 'Forma', 'PIAA', 'Shoei'][Math.floor(Math.random() * 5)],
        category: ['Cascos', 'Chaquetas', 'Botas', 'Luces', 'Protecciones'][Math.floor(Math.random() * 5)],
      });
    }
    return products;
  };

  const [products, setProducts] = useState(generateProducts(1));
  const totalPages = 10; // Simulamos 10 páginas de productos

  const handlePageChange = (page) => {
    setLoading(true);
    setCurrentPage(page);
    
    // Simulamos una carga de datos
    setTimeout(() => {
      setProducts(generateProducts(page));
      setLoading(false);
    }, 800);
  };

  const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
      addItem(product);
      // Opcional: Mostrar una notificación de éxito
    };

    return (
      <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg overflow-hidden
                      hover:border-sr-yellow transition-all duration-300 group">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <div className="absolute top-2 left-2 bg-sr-red text-sr-text text-xs px-3 py-1 rounded-full">
              -{product.discount}%
            </div>
          )}
          <div className="absolute top-2 right-2 bg-sr-yellow/90 text-sr-dark text-xs px-3 py-1 rounded-full">
            {product.brand}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sr-text/60 text-sm">{product.category}</span>
          </div>
          
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

          <button 
            onClick={handleAddToCart}
            className="w-full bg-sr-yellow text-sr-dark px-4 py-2 rounded-lg font-medium
                     hover:bg-sr-red hover:text-sr-text transition-colors duration-300
                     flex items-center justify-center gap-2"
          >
            <FaShoppingCart />
            Agregar al Carrito
          </button>
        </div>
      </div>
    );
  };

  const InsuranceCard = ({ company }) => (
    <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-6 hover:border-sr-yellow transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <img src={company.logo} alt={company.name} className="h-12 object-contain" />
        <div className="flex items-center gap-1">
          <FaStar className="text-sr-yellow" />
          <span className="text-sr-text">{company.rating}</span>
        </div>
      </div>
      
      <h3 className="text-sr-yellow font-semibold text-xl mb-2">{company.name}</h3>
      <p className="text-sr-text/80 mb-4">{company.description}</p>
      
      <ul className="space-y-2 mb-4">
        {company.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sr-text/70">
            <FaShieldAlt className="text-sr-yellow" />
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full bg-sr-yellow text-sr-dark px-4 py-2 rounded-lg font-medium
                       hover:bg-sr-red hover:text-sr-text transition-colors duration-300">
        Solicitar Cotización
      </button>
    </div>
  );

  const CategoryIcon = ({ category }) => {
    const icons = {
      'Cascos': GiFullMotorcycleHelmet,
      'Chaquetas': GiMonclerJacket,
      'Protecciones': GiKneePad,
      'Luces': FaLightbulb,
      'Impermeables': FaUmbrella,
      'Botas': FaShoePrints,
    };
    const Icon = icons[category] || FaMotorcycle;
    return <Icon className="text-4xl text-sr-yellow" />;
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="https://picsum.photos/1200/400" 
            alt="Hero"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sr-dark via-sr-dark/70 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-sr-yellow mb-4">
                Tu Seguridad es Nuestra Prioridad
              </h1>
              <p className="text-sr-text text-lg mb-6">
                Encuentra el mejor equipamiento de protección para motociclistas.
                Calidad y seguridad garantizada en cada producto.
              </p>
              <button className="bg-sr-yellow text-sr-dark px-8 py-3 rounded-lg font-medium
                              hover:bg-sr-red hover:text-sr-text transition-colors duration-300
                              flex items-center gap-2">
                Explorar Productos
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Categorías Principales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sr-yellow mb-6">Categorías Principales</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Cascos', 'Chaquetas', 'Protecciones', 'Luces', 'Impermeables', 'Botas'].map((category) => (
              <button key={category} className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-4
                                              hover:border-sr-yellow transition-all duration-300
                                              flex flex-col items-center gap-2">
                <CategoryIcon category={category} />
                <span className="text-sr-text">{category}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Productos Destacados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sr-yellow mb-6">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Aseguradoras */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sr-yellow mb-6">Aseguradoras Recomendadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceCompanies.map((company) => (
              <InsuranceCard key={company.id} company={company} />
            ))}
          </div>
        </section>

        {/* Productos Paginados */}
        <section>
          <h2 className="text-2xl font-bold text-sr-yellow mb-6">Todos los Productos</h2>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-sr-yellow border-t-transparent"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Paginación */}
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-sr-dark/30 border border-sr-yellow/20
                           hover:border-sr-yellow disabled:opacity-50 disabled:hover:border-sr-yellow/20"
                >
                  <FaChevronLeft className="text-sr-yellow" />
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center
                              ${currentPage === i + 1
                                ? 'bg-sr-yellow text-sr-dark'
                                : 'bg-sr-dark/30 border border-sr-yellow/20 text-sr-text hover:border-sr-yellow'
                              }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-sr-dark/30 border border-sr-yellow/20
                           hover:border-sr-yellow disabled:opacity-50 disabled:hover:border-sr-yellow/20"
                >
                  <FaChevronRight className="text-sr-yellow" />
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </Layout>
  );
}

export default Home; 