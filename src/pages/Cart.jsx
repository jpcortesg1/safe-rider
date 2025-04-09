import React from 'react';
import Layout from '../components/Layout';
import useCartStore from '../store/cartStore';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';

function Cart() {
  const { items, totalAmount, removeItem, updateQuantity, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-12">
            <FaShoppingCart className="text-6xl text-sr-yellow/20 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-sr-yellow mb-2">Tu carrito está vacío</h2>
            <p className="text-sr-text/60">¡Agrega algunos productos para comenzar!</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-sr-yellow mb-8">Tu Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div 
                key={item.id}
                className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-4
                         hover:border-sr-yellow transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-grow">
                    <h3 className="text-sr-yellow font-semibold">{item.name}</h3>
                    <p className="text-sr-text/60 text-sm">{item.category}</p>
                    <p className="text-sr-yellow font-bold mt-1">${item.price}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sr-red hover:text-sr-yellow transition-colors"
                    >
                      <FaTrash />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="bg-sr-dark/50 text-sr-yellow p-1 rounded
                                 hover:bg-sr-yellow hover:text-sr-dark transition-colors"
                      >
                        <FaMinus size={12} />
                      </button>

                      <span className="text-sr-text w-8 text-center">{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-sr-dark/50 text-sr-yellow p-1 rounded
                                 hover:bg-sr-yellow hover:text-sr-dark transition-colors"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>

                    <p className="text-sr-yellow font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen del carrito */}
          <div className="lg:col-span-1">
            <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-sr-yellow mb-4">Resumen del Pedido</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sr-text/60">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sr-text/60">
                  <span>Envío</span>
                  <span>Calculado al finalizar</span>
                </div>
              </div>

              <div className="border-t border-sr-yellow/20 pt-4 mb-6">
                <div className="flex justify-between text-sr-yellow font-bold">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-sr-yellow text-sr-dark px-4 py-3 rounded-lg font-medium
                              hover:bg-sr-red hover:text-sr-text transition-colors duration-300
                              mb-2">
                Proceder al Pago
              </button>

              <button
                onClick={clearCart}
                className="w-full bg-transparent border border-sr-red text-sr-red px-4 py-3 rounded-lg
                         hover:bg-sr-red hover:text-sr-text transition-colors duration-300
                         flex items-center justify-center gap-2"
              >
                <FaTrash />
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart; 