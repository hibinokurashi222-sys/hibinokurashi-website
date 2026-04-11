'use client'
import { useEffect, useState } from 'react'

const slides = [
  '/images/girl-window.jpg',
  '/images/exterior.jpg',
  '/images/family.jpg',
  '/images/coil.jpg',
  '/images/nature.jpg',
]

export default function Slideshow() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="hero-slides">
      {slides.map((src, idx) => (
        <div
          key={src}
          className={`hero-slide${idx === i ? ' active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  )
}
