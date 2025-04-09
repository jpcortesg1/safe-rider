import React, { useState } from 'react';
import Layout from '../components/Layout';
import useCartStore from '../store/cartStore';
import {
  FaTag,
  FaCopy,
  FaCheck,
  FaClock,
  FaPercent,
  FaInfoCircle,
  FaShoppingCart
} from 'react-icons/fa';

function Coupons() {
  const [copiedCode, setCopiedCode] = useState(null);
  const { totalAmount } = useCartStore();

  const coupons = [
    {
      id: 'WELCOME25',
      code: 'WELCOME25',
      discount: 25,
      type: 'percentage',
      minAmount: 100,
      description: 'Obtén un 25% de descuento en tu primera compra',
      endDate: '2024-04-30',
      maxDiscount: 100,
      category: 'Nuevos Usuarios',
      conditions: [
        'Válido solo para primera compra',
        'Mínimo de compra $100',
        'Máximo descuento $100'
      ]
    },
    {
      id: 'HELMET50',
      code: 'HELMET50',
      discount: 50,
      type: 'fixed',
      minAmount: 300,
      description: 'Descuento de $50 en cascos seleccionados',
      endDate: '2024-04-25',
      category: 'Cascos',
      conditions: [
        'Válido solo para cascos',
        'Mínimo de compra $300',
        'No acumulable con otras promociones'
      ]
    },
    {
      id: 'SAFETY15',
      code: 'SAFETY15',
      discount: 15,
      type: 'percentage',
      minAmount: 150,
      description: '15% de descuento en equipamiento de seguridad',
      endDate: '2024-05-15',
      maxDiscount: 75,
      category: 'Protecciones',
      conditions: [
        'Válido en protecciones y equipamiento',
        'Mínimo de compra $150',
        'Máximo descuento $75'
      ]
    },
    {
      id: 'FLASH30',
      code: 'FLASH30',
      discount: 30,
      type: 'percentage',
      minAmount: 200,
      description: 'Oferta relámpago: 30% en todo el sitio',
      endDate: '2024-04-23',
      maxDiscount: 150,
      category: 'Flash Sale',
      conditions: [
        'Válido por 24 horas',
        'Mínimo de compra $200',
        'Máximo descuento $150'
      ]
    }
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const daysUntilEnd = (endDate) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const isApplicable = (coupon) => {
    return totalAmount >= coupon.minAmount;
  };

  const CouponCard = ({ coupon }) => (
    <div className={`bg-sr-dark/30 border rounded-lg p-6 transition-all duration-300
                    ${isApplicable(coupon) 
                      ? 'border-sr-yellow/20 hover:border-sr-yellow' 
                      : 'border-sr-red/20 opacity-75'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="bg-sr-yellow/90 text-sr-dark text-xs px-3 py-1 rounded-full">
            {coupon.category}
          </span>
          <h3 className="text-xl font-bold text-sr-yellow mt-2">{coupon.code}</h3>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-sr-yellow">
            {coupon.type === 'percentage' ? `${coupon.discount}%` : `$${coupon.discount}`}
          </span>
          <p className="text-sr-text/60 text-sm">
            OFF
          </p>
        </div>
      </div>

      <p className="text-sr-text/80 mb-4">{coupon.description}</p>

      <div className="space-y-2 mb-4">
        {coupon.conditions.map((condition, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-sr-text/60">
            <FaInfoCircle className="mt-1 flex-shrink-0" />
            <span>{condition}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sr-text/60 text-sm">
          <FaClock className="mr-1" />
          {daysUntilEnd(coupon.endDate)} días restantes
        </div>
        {coupon.maxDiscount && (
          <div className="text-sr-text/60 text-sm">
            Hasta ${coupon.maxDiscount}
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => handleCopyCode(coupon.code)}
          className={`flex-1 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2
                     ${isApplicable(coupon)
                       ? 'bg-sr-yellow text-sr-dark hover:bg-sr-red hover:text-sr-text'
                       : 'bg-sr-dark/50 text-sr-text/50 cursor-not-allowed'}`}
          disabled={!isApplicable(coupon)}
        >
          {copiedCode === coupon.code ? (
            <>
              <FaCheck />
              ¡Copiado!
            </>
          ) : (
            <>
              <FaCopy />
              Copiar Código
            </>
          )}
        </button>
      </div>

      {!isApplicable(coupon) && (
        <p className="text-sr-red text-sm mt-2">
          *Requiere un mínimo de compra de ${coupon.minAmount}
        </p>
      )}
    </div>
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-sr-yellow flex items-center gap-2">
            <FaTag />
            Cupones Disponibles
          </h1>
          <div className="text-sr-text/60">
            <FaShoppingCart className="inline-block mr-2" />
            Total del carrito: ${totalAmount.toFixed(2)}
          </div>
        </div>

        {/* Banner informativo */}
        <div className="bg-sr-dark/50 border border-sr-yellow/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-sr-yellow mb-2 flex items-center gap-2">
            <FaPercent />
            ¿Cómo usar los cupones?
          </h2>
          <p className="text-sr-text/80">
            1. Copia el código del cupón que desees utilizar
            <br />
            2. Agrega productos a tu carrito hasta alcanzar el monto mínimo requerido
            <br />
            3. Aplica el código en el checkout para obtener tu descuento
          </p>
        </div>

        {/* Grid de cupones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Coupons; 