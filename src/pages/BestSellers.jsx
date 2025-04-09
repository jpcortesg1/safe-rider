import React from 'react';
import Layout from '../components/Layout';
import useCartStore from '../store/cartStore';
import {
  FaCrown,
  FaStar,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaMotorcycle,
  FaTrophy,
  FaRegStar,
  FaStopwatch,
  FaShieldAlt,
  FaCheck
} from 'react-icons/fa';

const BestSellers = () => {
  const addItem = useCartStore(state => state.addItem);

  // Mock data para productos más vendidos
  const topProducts = [
    {
      id: 'top1',
      name: 'Casco Shoei X-Spirit III',
      price: 899.99,
      image: 'https://picsum.photos/400/300',
      rating: 4.9,
      reviews: 1250,
      sales: 3500,
      category: 'Cascos',
      rank: 1,
      timeOnTop: '3 meses',
      badge: 'Más Vendido',
      description: 'El casco más avanzado para los motociclistas más exigentes',
      stock: 15
    },
    {
      id: 'top2',
      name: 'Chaqueta Alpinestars GP Plus R v3',
      price: 599.99,
      image: 'https://picsum.photos/400/301',
      rating: 4.8,
      reviews: 980,
      sales: 2800,
      category: 'Chaquetas',
      rank: 2,
      timeOnTop: '2 meses',
      badge: 'Tendencia',
      description: 'Protección y estilo en una chaqueta premium',
      stock: 20
    },
    {
      id: 'top3',
      name: 'Guantes Dainese Carbon 3',
      price: 129.99,
      image: 'https://picsum.photos/400/302',
      rating: 4.7,
      reviews: 756,
      sales: 2200,
      category: 'Guantes',
      rank: 3,
      timeOnTop: '1 mes',
      badge: 'Popular',
      description: 'Máximo control y protección para tus manos',
      stock: 30
    }
  ];

  // Mock data para categorías más vendidas
  const topCategories = [
    {
      name: 'Cascos',
      icon: FaShieldAlt,
      products: [
        {
          id: 'helmet1',
          name: 'AGV K6',
          price: 699.99,
          image: 'https://picsum.photos/400/303',
          rating: 4.6,
          sales: 1800,
          stock: 12
        },
        {
          id: 'helmet2',
          name: 'Arai RX-7V',
          price: 849.99,
          image: 'https://picsum.photos/400/304',
          rating: 4.7,
          sales: 1500,
          stock: 8
        }
      ]
    },
    {
      name: 'Chaquetas',
      icon: FaMotorcycle,
      products: [
        {
          id: 'jacket1',
          name: 'Dainese Super Speed 3',
          price: 449.99,
          image: 'https://picsum.photos/400/305',
          rating: 4.5,
          sales: 1200,
          stock: 15
        },
        {
          id: 'jacket2',
          name: 'Rev\'it! Quantum 2',
          price: 529.99,
          image: 'https://picsum.photos/400/306',
          rating: 4.6,
          sales: 950,
          stock: 10
        }
      ]
    }
  ];

  const TopProductCard = ({ product }) => {
    const handleAddToCart = () => {
      addItem(product);
    };

    const getRankColor = (rank) => {
      switch (rank) {
        case 1: return 'text-yellow-400';
        case 2: return 'text-gray-400';
        case 3: return 'text-amber-700';
        default: return 'text-sr-yellow';
      }
    };

    return (
      <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg overflow-hidden hover:border-sr-yellow transition-all duration-300">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <div className={`${getRankColor(product.rank)} bg-sr-dark/90 p-3 rounded-full`}>
              <FaTrophy className="text-2xl" />
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-sr-yellow text-sr-dark text-sm font-bold px-3 py-1 rounded-full">
              #{product.rank}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-sr-yellow mb-2">{product.name}</h3>
              <p className="text-sr-text/60 text-sm mb-2">{product.description}</p>
              <div className="flex items-center gap-4 text-sm text-sr-text/60">
                <span className="flex items-center gap-1">
                  <FaChartLine />
                  {product.sales} ventas
                </span>
                <span className="flex items-center gap-1">
                  <FaUsers />
                  {product.reviews} reseñas
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-sr-yellow">${product.price}</div>
              <div className="text-sr-text/60 text-sm">Stock: {product.stock}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-sr-yellow">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.floor(product.rating) ? 'text-sr-yellow' : 'text-sr-yellow/20'}
                />
              ))}
            </div>
            <span className="text-sr-text/60">({product.rating})</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sr-text/60 text-sm">
              Top {product.timeOnTop}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-sr-yellow text-sr-dark px-6 py-2 rounded-lg font-medium hover:bg-sr-red hover:text-sr-text transition-colors duration-300 flex items-center gap-2"
            >
              <FaShoppingCart />
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CategoryProductCard = ({ product }) => {
    const handleAddToCart = () => {
      addItem(product);
    };

    return (
      <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg overflow-hidden hover:border-sr-yellow transition-all duration-300">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-sr-dark/80 text-sr-yellow text-sm px-3 py-1 rounded-full">
              {product.sales} ventas
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-sr-yellow mb-2">{product.name}</h3>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-sr-yellow">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.floor(product.rating) ? 'text-sr-yellow' : 'text-sr-yellow/20'}
                />
              ))}
            </div>
            <span className="text-sr-text/60">({product.rating})</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-sr-yellow">${product.price}</span>
            <button
              onClick={handleAddToCart}
              className="bg-sr-yellow text-sr-dark px-4 py-2 rounded-lg font-medium hover:bg-sr-red hover:text-sr-text transition-colors duration-300 flex items-center gap-2"
            >
              <FaShoppingCart />
              Agregar
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-sr-yellow mb-8 flex items-center gap-2">
          <FaTrophy />
          Los Más Vendidos
        </h1>

        {/* Top 3 Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-sr-yellow mb-6">Top 3 Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map(product => (
              <TopProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Statistics Banner */}
        <section className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sr-yellow mb-2">15,000+</div>
              <div className="text-sr-text/60">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sr-yellow mb-2">50,000+</div>
              <div className="text-sr-text/60">Productos Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sr-yellow mb-2">4.8</div>
              <div className="text-sr-text/60">Calificación Promedio</div>
            </div>
          </div>
        </section>

        {/* Categories */}
        {topCategories.map(category => (
          <section key={category.name} className="mb-12">
            <h2 className="text-2xl font-semibold text-sr-yellow mb-6 flex items-center gap-2">
              <category.icon />
              Top en {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map(product => (
                <CategoryProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default BestSellers; 