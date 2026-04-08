'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyCta() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => {
      const footer = document.querySelector('footer')
      const inFooter = footer ? window.scrollY + window.innerHeight >= footer.getBoundingClientRect().top + window.scrollY : false
      setShow(window.scrollY > 400 && !inFooter)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <Link href="/stay#reserve" className={`sticky-cta btn btn--blue${show ? ' show' : ''}`}>
      ご予約はこちら
    </Link>
  )
}
