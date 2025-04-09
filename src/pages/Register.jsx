import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import StarField from '../components/StarField'
import logo from '../assets/logo.jpeg'

const actoresViales = [
  'Peatón',
  'Ciclista',
  'Motociclista',
  'Conductor de Auto',
  'Conductor de Transporte Público Colectivo',
  'Conductor de Taxi',
  'Conductor de Transporte de Carga',
  'Persona con Movilidad Reducida (PMR)',
  'Persona con Discapacidad Visual',
  'Persona con Discapacidad Auditiva'
]

function Register() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    login({ email: data.email })
    navigate('/')
  }, [login, navigate])

  const InputField = ({ label, name, type = 'text', placeholder, required = true, ...props }) => (
    <div>
      <label htmlFor={name} className="block text-sr-text mb-1 text-left">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="w-full px-4 py-2.5 rounded-lg bg-sr-dark/50 border border-sr-yellow/20 
                 text-sr-text placeholder-sr-text/50 focus:outline-none focus:border-sr-yellow
                 transition duration-300 hover:border-sr-yellow/50 relative z-30"
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  )

  const SelectField = ({ label, name, options, required = true }) => (
    <div>
      <label htmlFor={name} className="block text-sr-text mb-1 text-left">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="w-full px-4 py-2.5 rounded-lg bg-sr-dark/50 border border-sr-yellow/20 
                 text-sr-text focus:outline-none focus:border-sr-yellow
                 transition duration-300 hover:border-sr-yellow/50 relative z-30"
        required={required}
      >
        <option value="">Selecciona una opción</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )

  return (
    <div className="h-screen bg-sr-dark flex relative overflow-hidden">
      <div className="absolute inset-0">
        <StarField />
      </div>
      
      {/* Lado izquierdo - Formulario */}
      <div className="w-full lg:w-2/3 flex items-center justify-center relative z-20 px-4">
        <div className="w-full max-w-2xl bg-sr-dark/80 p-6 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-sr-yellow mb-6 animate-slide-left">
            Registro en SAFE RIDER
          </h1>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Nombre Completo"
              name="nombre"
              placeholder="Juan Pérez"
            />
            
            <InputField
              label="Correo Electrónico"
              name="email"
              type="email"
              placeholder="ejemplo@correo.com"
            />

            <InputField
              label="Contraseña"
              name="password"
              type="password"
              placeholder="••••••••"
            />

            <InputField
              label="Edad"
              name="edad"
              type="number"
              placeholder="25"
              min="18"
              max="100"
            />

            <InputField
              label="País"
              name="pais"
              placeholder="Colombia"
            />

            <InputField
              label="Estado/Departamento"
              name="estado"
              placeholder="Antioquia"
            />

            <InputField
              label="Ciudad"
              name="ciudad"
              placeholder="Medellín"
            />

            <InputField
              label="Código Postal"
              name="codigoPostal"
              placeholder="110111"
            />

            <SelectField
              label="Género"
              name="genero"
              options={['Masculino', 'Femenino', 'Otro', 'Prefiero no decir']}
            />

            <div className="flex gap-2">
              <div className="w-1/4">
                <InputField
                  label="Ind."
                  name="indicativoPais"
                  defaultValue="+57"
                  placeholder="+57"
                />
              </div>
              <div className="w-3/4">
                <InputField
                  label="Celular"
                  name="celular"
                  type="tel"
                  placeholder="3001234567"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <SelectField
                label="Actor Vial"
                name="actorVial"
                options={actoresViales}
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-sr-yellow text-sr-dark font-bold py-2.5 px-4 rounded-lg
                         hover:bg-sr-red hover:text-sr-text transition-colors duration-300
                         transform hover:scale-105 active:scale-95"
              >
                Registrarse
              </button>

              <div className="text-center mt-4">
                <Link 
                  to="/login" 
                  className="text-sr-yellow hover:text-sr-red transition-colors duration-300
                           hover:scale-110 inline-block"
                >
                  ¿Ya tienes una cuenta? Inicia sesión
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Lado derecho - Branding */}
      <div className="hidden lg:flex lg:w-1/3 bg-sr-yellow items-center justify-center relative z-20">
        <div className="text-center">
          <img 
            src={logo} 
            alt="Safe Rider Logo" 
            className="w-48 h-48 mx-auto mb-6 rounded-full shadow-lg animate-fade-in"
          />
          <h1 className="text-6xl font-bold text-sr-dark mb-4 animate-slide-right">
            SAFE RIDER
          </h1>
          <p className="text-xl text-sr-dark/80 animate-slide-left">
            Tu seguridad es nuestra prioridad
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register 