import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
  FaCamera,
  FaTrash,
  FaInfoCircle,
  FaDollarSign,
  FaMotorcycle,
  FaTags,
  FaBox,
  FaTruck
} from 'react-icons/fa';

const Sell = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const categories = [
    'Cascos',
    'Chaquetas',
    'Guantes',
    'Botas',
    'Protecciones',
    'Accesorios',
    'Repuestos',
    'Otros'
  ];

  const conditions = [
    'Nuevo',
    'Como nuevo',
    'Buen estado',
    'Estado aceptable'
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert('Máximo 5 imágenes permitidas');
      return;
    }

    const newImages = [...images, ...files];
    setImages(newImages);

    // Crear URLs de preview para las nuevas imágenes
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previewImages.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviewImages(newPreviews);
  };

  const InputField = ({ label, icon: Icon, type = 'text', ...props }) => (
    <div className="mb-4">
      <label className="block text-sr-yellow mb-2 font-medium flex items-center gap-2">
        <Icon className="text-lg" />
        {label}
      </label>
      <input
        type={type}
        className="w-full px-4 py-2 bg-sr-dark/50 border border-sr-yellow/20 rounded-lg
                 text-sr-text placeholder-sr-text/50 focus:outline-none focus:border-sr-yellow
                 transition duration-300"
        {...props}
      />
    </div>
  );

  const TextArea = ({ label, icon: Icon, ...props }) => (
    <div className="mb-4">
      <label className="block text-sr-yellow mb-2 font-medium flex items-center gap-2">
        <Icon className="text-lg" />
        {label}
      </label>
      <textarea
        className="w-full px-4 py-2 bg-sr-dark/50 border border-sr-yellow/20 rounded-lg
                 text-sr-text placeholder-sr-text/50 focus:outline-none focus:border-sr-yellow
                 transition duration-300 min-h-[120px]"
        {...props}
      />
    </div>
  );

  const SelectField = ({ label, icon: Icon, options, ...props }) => (
    <div className="mb-4">
      <label className="block text-sr-yellow mb-2 font-medium flex items-center gap-2">
        <Icon className="text-lg" />
        {label}
      </label>
      <select
        className="w-full px-4 py-2 bg-sr-dark/50 border border-sr-yellow/20 rounded-lg
                 text-sr-text focus:outline-none focus:border-sr-yellow
                 transition duration-300"
        {...props}
      >
        <option value="">Selecciona una opción</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-sr-yellow mb-4">Vender un Producto</h1>
          <p className="text-sr-text/80">
            Completa el formulario para publicar tu producto en el marketplace
          </p>
        </div>

        <form className="bg-sr-dark/30 border border-sr-yellow/20 rounded-lg p-6">
          {/* Sección de Imágenes */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-sr-yellow mb-4 flex items-center gap-2">
              <FaCamera />
              Imágenes del Producto
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              {previewImages.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg border border-sr-yellow/20"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-sr-dark/80 text-sr-red p-1.5 rounded-full
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                </div>
              ))}
              {images.length < 5 && (
                <label className="border-2 border-dashed border-sr-yellow/20 rounded-lg p-4
                               flex flex-col items-center justify-center cursor-pointer
                               hover:border-sr-yellow transition-colors duration-300">
                  <FaCamera className="text-2xl text-sr-yellow mb-2" />
                  <span className="text-sm text-sr-text/80">Agregar Imagen</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    multiple
                  />
                </label>
              )}
            </div>
            <p className="text-sm text-sr-text/60">
              Máximo 5 imágenes. La primera imagen será la principal.
            </p>
          </div>

          {/* Información Básica */}
          <div className="space-y-4">
            <InputField
              label="Título del Producto"
              icon={FaInfoCircle}
              placeholder="Ej: Casco AGV K1 Talla M"
              required
            />

            <TextArea
              label="Descripción"
              icon={FaInfoCircle}
              placeholder="Describe tu producto, incluye detalles importantes como talla, color, características especiales, etc."
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Precio"
                icon={FaDollarSign}
                type="number"
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />

              <InputField
                label="Stock Disponible"
                icon={FaBox}
                type="number"
                placeholder="1"
                min="1"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectField
                label="Categoría"
                icon={FaTags}
                options={categories}
                required
              />

              <SelectField
                label="Estado"
                icon={FaMotorcycle}
                options={conditions}
                required
              />
            </div>

            <InputField
              label="Ubicación"
              icon={FaTruck}
              placeholder="Ciudad, Departamento"
              required
            />
          </div>

          {/* Botón de Envío */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-sr-yellow text-sr-dark font-bold py-3 px-6 rounded-lg
                       hover:bg-sr-red hover:text-sr-text transition-colors duration-300
                       flex items-center justify-center gap-2"
            >
              <FaTags />
              Publicar Producto
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Sell; 