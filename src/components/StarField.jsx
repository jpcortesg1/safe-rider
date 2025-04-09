import React, { useEffect } from 'react'

const StarField = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div')
      star.className = 'star'
      
      // Posición aleatoria
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      
      // Tamaño aleatorio
      const size = Math.random() * 3
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      
      // Retraso aleatorio en la animación
      star.style.animationDelay = `${Math.random() * 2}s`
      
      return star
    }

    const starField = document.querySelector('.star-field')
    // Crear 100 estrellas
    for (let i = 0; i < 100; i++) {
      starField.appendChild(createStar())
    }

    // Limpieza
    return () => {
      const stars = document.querySelectorAll('.star')
      stars.forEach(star => star.remove())
    }
  }, [])

  return <div className="star-field" />
}

export default StarField 