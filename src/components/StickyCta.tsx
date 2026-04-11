'use client'
import { useEffect, useState } from 'react'
import { trackReserve } from '@/lib/gtm'
import TrackLink from './TrackLink'

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
    <TrackLink
      href="/stay/#reserve"
      className={`sticky-cta btn btn--blue${show ? ' show' : ''}`}
      gtmEvent="reserve_click"
      gtmLabel="sticky_cta"
      onClick={() => trackReserve('sticky_cta')}
    >
      ご予約はこちら
    </TrackLink>
  )
}
