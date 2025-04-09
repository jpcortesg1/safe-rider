import React from 'react';
import Layout from '../components/Layout';
import useCartStore from '../store/cartStore';
import {
  FaShoppingCart,
  FaStar,
  FaFire,
  FaClock,
  FaPercent,
  FaTags
} from 'react-icons/fa';

function Offers() {
  const addItem = useCartStore(state => state.addItem);

  const offerCategories = [
    {
      id: 1,
      name: 'Hot Deals',
      icon: FaFire,
      products: [
        {
          id: 'offer1',
          name: 'Casco Shoei X-Spirit III',
          price: 899.99,
          originalPrice: 1299.99,
          rating: 4.9,
          image: 'https://picsum.photos/400/300',
          brand: 'Shoei',
          category: 'Cascos',
          discount: 30,
          endDate: '2024-04-30',
          stock: 5
        },
        {
          id: 'offer2',
          name: 'Chaqueta Dainese Racing 4',
          price: 499.99,
          originalPrice: 799.99,
          rating: 4.8,
          image: 'https://picsum.photos/400/301',
          brand: 'Dainese',
          category: 'Chaquetas',
          discount: 37,
          endDate: '2024-04-25',
          stock: 8
        }
      ]
    },
    {
      id: 2,
      name: 'Liquidación de Temporada',
      icon: FaTags,
      products: [
        {
          id: 'offer3',
          name: 'Guantes Alpinestars GP Pro R3',
          price: 89.99,
          originalPrice: 159.99,
          rating: 4.7,
          image: 'https://picsum.photos/400/302',
          brand: 'Alpinestars',
          category: 'Guantes',
          discount: 44,
          endDate: '2024-04-28',
          stock: 12
        },
        {
          id: 'offer4',
          name: 'Botas TCX Hero Waterproof',
          price: 159.99,
          originalPrice: 249.99,
          rating: 4.6,
          image: 'https://picsum.photos/400/303',
          brand: 'TCX',
          category: 'Botas',
          discount: 36,
          endDate: '2024-04-27',
          stock: 6
        }
      ]
    },
    {
      id: 3,
      name: 'Ofertas Relámpago',
      icon: FaClock,
      products: [
        {
          id: 'offer5',
          name: 'Intercomunicador Cardo Packtalk Edge',
          price: 299.99,
          originalPrice: 449.99,
          rating: 4.8,
          image: 'https://picsum.photos/400/304',
          brand: 'Cardo',
          category: 'Comunicación',
          discount: 33,
          endDate: '2024-04-23',
          stock: 4
        },
        {
          id: 'offer6',
          name: 'Protector de Espalda Dainese',
          price: 129.99,
          originalPrice: 199.99,
          rating: 4.7,
          image: 'https://picsum.photos/400/305',
          brand: 'Dainese',
          category: 'Protecciones',
          discount: 35,
          endDate: '2024-04-24',
          stock: 9
        }
      ]
    }
  ];

  const OfferCard = ({ product }) => {
    const handleAddToCart = () => {
      addItem(product);
    };

    const daysUntilEnd = () => {
      const end = new Date(product.endDate);
      const now = new Date();
      const diff = end - now;
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
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
          <div className="absolute top-2 left-2 bg-sr-red text-sr-text text-xs px-3 py-1 rounded-full">
            -{product.discount}%
          </div>
          <div className="absolute top-2 right-2 bg-sr-yellow/90 text-sr-dark text-xs px-3 py-1 rounded-full">
            {product.brand}
          </div>
          {product.stock <= 5 && (
            <div className="absolute bottom-2 left-2 bg-sr-dark/80 text-sr-red text-xs px-3 py-1 rounded-full">
              ¡Solo {product.stock} unidades!
            </div>
          )}
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
            <div className="flex flex-col">
              <span className="text-sr-text/60 line-through text-sm">
                ${product.originalPrice}
              </span>
              <span className="text-sr-yellow font-bold text-xl">
                ${product.price}
              </span>
            </div>
            <div className="text-sr-text/60 text-sm text-right">
              <FaClock className="inline mr-1" />
              {daysUntilEnd()} días
            </div>
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

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-sr-yellow mb-8 flex items-center gap-2">
          <FaPercent />
          Ofertas Especiales
        </h1>

        {/* Banner informativo */}
        <div className="bg-sr-dark/50 border border-sr-yellow/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-sr-yellow mb-2">
            ¡No te pierdas estas increíbles ofertas!
          </h2>
          <p className="text-sr-text/80">
            Todas las ofertas están sujetas a disponibilidad y tienen tiempo limitado.
            Los precios mostrados ya incluyen el descuento aplicado.
          </p>
        </div>

        {/* Secciones de ofertas */}
        {offerCategories.map((category) => (
          <section key={category.id} className="mb-12">
            <h2 className="text-2xl font-bold text-sr-yellow mb-6 flex items-center gap-2">
              <category.icon />
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <OfferCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}

export default Offers; 