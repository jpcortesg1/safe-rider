import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="min-h-screen bg-sr-dark text-sr-text">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Acerca de Safe Rider</h1>
        <div className="bg-sr-dark/50 rounded-lg p-6 shadow-xl border border-sr-yellow/20">
          <p className="text-lg mb-6">
            Esta es una aplicación para mejorar la seguridad de los motociclistas.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-sr-yellow text-sr-dark px-6 py-2 rounded-lg hover:bg-sr-red hover:text-sr-text transition-colors duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About 