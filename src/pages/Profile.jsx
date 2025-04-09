import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FaUser, FaHistory, FaCog, FaMotorcycle, FaEdit, FaCamera } from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  // Mock data - En un caso real, esto vendría de tu estado global o API
  const userData = {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '+57 300 123 4567',
    address: 'Calle 123 #45-67',
    city: 'Medellín',
    country: 'Colombia',
    actorVial: 'Motociclista',
    joinDate: '2024-01-15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JuanPerez'
  };

  const purchaseHistory = [
    {
      id: 1,
      date: '2024-03-15',
      product: 'Casco AGV K1',
      price: '$350',
      status: 'Entregado'
    },
    {
      id: 2,
      date: '2024-03-10',
      product: 'Chaqueta Alpinestars',
      price: '$280',
      status: 'En camino'
    },
    {
      id: 3,
      date: '2024-03-01',
      product: 'Guantes Dainese',
      price: '$85',
      status: 'Entregado'
    }
  ];

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300
                ${activeTab === id 
                  ? 'bg-sr-yellow text-sr-dark font-semibold' 
                  : 'text-sr-text hover:text-sr-yellow'}`}
    >
      <Icon className="text-lg" />
      {label}
    </button>
  );

  const PersonalInfo = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <div className="relative">
          <img
            src={userData.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-sr-yellow"
          />
          <button className="absolute bottom-0 right-0 bg-sr-yellow text-sr-dark p-2 rounded-full
                           hover:bg-sr-red hover:text-sr-text transition-colors duration-300">
            <FaCamera />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-sr-yellow flex items-center gap-2">
            {userData.name}
            <button className="text-base hover:text-sr-red transition-colors duration-300">
              <FaEdit />
            </button>
          </h2>
          <p className="text-sr-text/80">{userData.email}</p>
          <p className="text-sr-text/60">Miembro desde {userData.joinDate}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-sr-yellow">Información de Contacto</h3>
          <div className="space-y-2">
            <p className="text-sr-text">Teléfono: {userData.phone}</p>
            <p className="text-sr-text">Email: {userData.email}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-sr-yellow">Dirección</h3>
          <div className="space-y-2">
            <p className="text-sr-text">{userData.address}</p>
            <p className="text-sr-text">{userData.city}, {userData.country}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-sr-yellow">Perfil de Usuario</h3>
          <div className="space-y-2">
            <p className="text-sr-text">Actor Vial: {userData.actorVial}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const PurchaseHistory = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-sr-yellow">Historial de Compras</h2>
      <div className="space-y-4">
        {purchaseHistory.map((purchase) => (
          <div
            key={purchase.id}
            className="bg-sr-dark/50 border border-sr-yellow/20 rounded-lg p-4 hover:border-sr-yellow
                     transition-colors duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sr-yellow font-semibold">{purchase.product}</h3>
                <p className="text-sr-text/60">{purchase.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sr-yellow font-semibold">{purchase.price}</p>
                <p className="text-sr-text/60">{purchase.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Settings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-sr-yellow">Configuración</h2>
      
      <div className="space-y-4">
        <div className="bg-sr-dark/50 border border-sr-yellow/20 rounded-lg p-4">
          <h3 className="text-sr-yellow font-semibold mb-2">Notificaciones</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sr-text cursor-pointer">
              <input type="checkbox" className="accent-sr-yellow" defaultChecked />
              Notificaciones por email
            </label>
            <label className="flex items-center gap-2 text-sr-text cursor-pointer">
              <input type="checkbox" className="accent-sr-yellow" defaultChecked />
              Notificaciones push
            </label>
          </div>
        </div>

        <div className="bg-sr-dark/50 border border-sr-yellow/20 rounded-lg p-4">
          <h3 className="text-sr-yellow font-semibold mb-2">Privacidad</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sr-text cursor-pointer">
              <input type="checkbox" className="accent-sr-yellow" defaultChecked />
              Perfil público
            </label>
            <label className="flex items-center gap-2 text-sr-text cursor-pointer">
              <input type="checkbox" className="accent-sr-yellow" />
              Mostrar historial de compras
            </label>
          </div>
        </div>

        <div className="bg-sr-dark/50 border border-sr-yellow/20 rounded-lg p-4">
          <h3 className="text-sr-yellow font-semibold mb-2">Preferencias</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sr-text cursor-pointer">
              <input type="checkbox" className="accent-sr-yellow" defaultChecked />
              Recibir ofertas especiales
            </label>
            <label className="flex items-center gap-2 text-sr-text cursor-pointer">
              <input type="checkbox" className="accent-sr-yellow" defaultChecked />
              Newsletter mensual
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 mb-6">
          <TabButton id="personal" label="Información Personal" icon={FaUser} />
          <TabButton id="history" label="Historial de Compras" icon={FaHistory} />
          <TabButton id="settings" label="Configuración" icon={FaCog} />
        </div>

        <div className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-6">
          {activeTab === 'personal' && <PersonalInfo />}
          {activeTab === 'history' && <PurchaseHistory />}
          {activeTab === 'settings' && <Settings />}
        </div>
      </div>
    </Layout>
  );
};

export default Profile; 