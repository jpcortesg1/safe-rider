import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaBook,
  FaChevronDown,
  FaChevronUp,
  FaMotorcycle,
  FaShieldAlt,
  FaTruck,
  FaExchangeAlt,
  FaCreditCard,
  FaChevronRight
} from 'react-icons/fa';

const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      category: 'Compras y Pedidos',
      icon: FaMotorcycle,
      questions: [
        {
          q: '¿Cómo realizo un pedido?',
          a: 'Para realizar un pedido, simplemente navega por nuestro catálogo, selecciona los productos que deseas, agrégalos al carrito y procede al checkout. Asegúrate de estar registrado para completar la compra.'
        },
        {
          q: '¿Cuánto tiempo tarda en llegar mi pedido?',
          a: 'Los tiempos de entrega varían según tu ubicación. Generalmente, los envíos dentro de la ciudad tardan 1-2 días hábiles, y envíos nacionales 3-5 días hábiles.'
        },
        {
          q: '¿Puedo rastrear mi pedido?',
          a: 'Sí, una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de seguimiento para rastrear tu envío.'
        }
      ]
    },
    {
      category: 'Devoluciones y Garantías',
      icon: FaExchangeAlt,
      questions: [
        {
          q: '¿Cuál es la política de devoluciones?',
          a: 'Aceptamos devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar sin usar y en su empaque original.'
        },
        {
          q: '¿Cómo funciona la garantía?',
          a: 'Todos nuestros productos tienen garantía contra defectos de fabricación. La duración varía según el producto, desde 6 meses hasta 2 años.'
        }
      ]
    },
    {
      category: 'Pagos y Facturación',
      icon: FaCreditCard,
      questions: [
        {
          q: '¿Qué métodos de pago aceptan?',
          a: 'Aceptamos tarjetas de crédito/débito, PayPal, transferencias bancarias y pagos en efectivo a través de puntos autorizados.'
        },
        {
          q: '¿Cómo solicito mi factura?',
          a: 'La factura electrónica se envía automáticamente al correo registrado. Si necesitas una factura específica, puedes solicitarla desde tu perfil.'
        }
      ]
    }
  ];

  const contactInfo = {
    email: 'soporte@saferider.com',
    phone: '+57 300 123 4567',
    whatsapp: '+57 300 123 4567',
    horario: 'Lunes a Viernes: 8:00 AM - 6:00 PM'
  };

  const guides = [
    {
      title: 'Guía de Tallas',
      icon: FaBook,
      description: 'Aprende cómo medir correctamente para encontrar tu talla perfecta en cascos, chaquetas y más.',
      link: '/guides/sizing'
    },
    {
      title: 'Cuidado de Equipamiento',
      icon: FaShieldAlt,
      description: 'Consejos para mantener tu equipo en óptimas condiciones y prolongar su vida útil.',
      link: '/guides/care'
    },
    {
      title: 'Proceso de Envío',
      icon: FaTruck,
      description: 'Información detallada sobre nuestros procesos de envío y tiempos de entrega.',
      link: '/guides/shipping'
    }
  ];

  const FaqSection = ({ category, questions, icon: Icon }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-sr-yellow flex items-center gap-2 mb-4">
        <Icon /> {category}
      </h3>
      <div className="space-y-3">
        {questions.map((faq, index) => (
          <div
            key={index}
            className="border border-sr-yellow/20 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenFaq(openFaq === `${category}-${index}` ? null : `${category}-${index}`)}
              className="w-full px-4 py-3 flex justify-between items-center hover:bg-sr-yellow/10
                       text-left transition-colors duration-300"
            >
              <span className="text-sr-text font-medium">{faq.q}</span>
              {openFaq === `${category}-${index}` ? (
                <FaChevronUp className="text-sr-yellow" />
              ) : (
                <FaChevronDown className="text-sr-yellow" />
              )}
            </button>
            {openFaq === `${category}-${index}` && (
              <div className="px-4 py-3 bg-sr-dark/30 border-t border-sr-yellow/20">
                <p className="text-sr-text/80">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sr-yellow mb-4">Centro de Ayuda</h1>
          <p className="text-sr-text/80 text-lg">
            ¿Cómo podemos ayudarte hoy?
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-sr-yellow mb-6">Contacto Directo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 p-4 bg-sr-dark/50 rounded-lg border border-sr-yellow/20
                       hover:border-sr-yellow transition-colors duration-300"
            >
              <FaEnvelope className="text-2xl text-sr-yellow" />
              <div>
                <p className="font-medium text-sr-yellow">Email</p>
                <p className="text-sr-text/80">{contactInfo.email}</p>
              </div>
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 p-4 bg-sr-dark/50 rounded-lg border border-sr-yellow/20
                       hover:border-sr-yellow transition-colors duration-300"
            >
              <FaPhone className="text-2xl text-sr-yellow" />
              <div>
                <p className="font-medium text-sr-yellow">Teléfono</p>
                <p className="text-sr-text/80">{contactInfo.phone}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-sr-dark/50 rounded-lg border border-sr-yellow/20
                       hover:border-sr-yellow transition-colors duration-300"
            >
              <FaWhatsapp className="text-2xl text-sr-yellow" />
              <div>
                <p className="font-medium text-sr-yellow">WhatsApp</p>
                <p className="text-sr-text/80">{contactInfo.whatsapp}</p>
              </div>
            </a>
          </div>
          <p className="text-center text-sr-text/60 mt-4">
            Horario de atención: {contactInfo.horario}
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-sr-yellow mb-6">Preguntas Frecuentes</h2>
          {faqs.map((section) => (
            <FaqSection
              key={section.category}
              category={section.category}
              questions={section.questions}
              icon={section.icon}
            />
          ))}
        </div>

        {/* Guides Section */}
        <div>
          <h2 className="text-2xl font-semibold text-sr-yellow mb-6">Guías y Recursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div
                key={guide.title}
                className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-6
                         hover:border-sr-yellow transition-colors duration-300"
              >
                <guide.icon className="text-3xl text-sr-yellow mb-4" />
                <h3 className="text-lg font-semibold text-sr-yellow mb-2">{guide.title}</h3>
                <p className="text-sr-text/80 mb-4">{guide.description}</p>
                <a
                  href={guide.link}
                  className="text-sr-yellow hover:text-sr-red transition-colors duration-300
                           flex items-center gap-2"
                >
                  Ver guía <FaChevronRight className="text-sm" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help; 