import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import StarField from '../components/StarField'
import logo from '../assets/logo.jpeg'
import '../styles/animations.css'

function Login() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [focusedInput, setFocusedInput] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email: formData.email })
    navigate('/')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (inputName) => {
    setFocusedInput(inputName)
    setTimeout(() => setFocusedInput(null), 500)
  }

  return (
    <div className="h-screen bg-sr-dark flex relative overflow-hidden">
      <div className="absolute inset-0">
        <StarField />
      </div>
      
      {/* Lado izquierdo - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-sr-yellow items-center justify-center relative z-20">
        <div className="text-center">
          <img 
            src={logo} 
            alt="Safe Rider Logo" 
            className="w-48 h-48 mx-auto mb-6 rounded-full shadow-lg animate-fade-in"
          />
          <h1 className="text-6xl font-bold text-sr-dark mb-4 animate-slide-left">
            SAFE RIDER
          </h1>
          <p className="text-xl text-sr-dark/80 animate-slide-right">
            Tu seguridad es nuestra prioridad
          </p>
        </div>
      </div>

      {/* Lado derecho - Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative z-20">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-6 lg:hidden">
            <img 
              src={logo} 
              alt="Safe Rider Logo" 
              className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg animate-fade-in"
            />
            <h1 className="text-4xl font-bold text-sr-yellow animate-slide-left">
              SAFE RIDER
            </h1>
            <p className="text-sr-text/80 mt-2 animate-slide-right">
              Tu seguridad es nuestra prioridad
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-sr-dark/80 p-6 rounded-lg backdrop-blur-sm">
            <div className={focusedInput === 'email' ? 'animate-bounce-custom' : ''}>
              <label htmlFor="email" className="block text-sr-text mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                className="w-full px-4 py-2.5 rounded-lg bg-sr-dark/50 border border-sr-yellow/20 
                         text-sr-text placeholder-sr-text/50 focus:outline-none focus:border-sr-yellow
                         transition duration-300 hover:border-sr-yellow/50"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            <div className={focusedInput === 'password' ? 'animate-bounce-custom' : ''}>
              <label htmlFor="password" className="block text-sr-text mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus('password')}
                className="w-full px-4 py-2.5 rounded-lg bg-sr-dark/50 border border-sr-yellow/20 
                         text-sr-text placeholder-sr-text/50 focus:outline-none focus:border-sr-yellow
                         transition duration-300 hover:border-sr-yellow/50"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sr-yellow text-sr-dark font-bold py-2.5 px-4 rounded-lg
                       hover:bg-sr-red hover:text-sr-text transition-colors duration-300
                       transform hover:scale-105 active:scale-95 mt-4"
            >
              Iniciar Sesión
            </button>

            <div className="text-center mt-3">
              <Link 
                to="/about" 
                className="text-sr-yellow hover:text-sr-red transition-colors duration-300
                         hover:scale-110 inline-block mr-4"
              >
                ¿Necesitas ayuda?
              </Link>
              <Link 
                to="/register" 
                className="text-sr-yellow hover:text-sr-red transition-colors duration-300
                         hover:scale-110 inline-block"
              >
                Crear cuenta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login 