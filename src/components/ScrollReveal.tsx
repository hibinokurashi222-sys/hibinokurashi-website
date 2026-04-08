'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // DOMが更新されるのを待ってから観測開始
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll<Element>(
        '.sec, .about-sec, .photo-strip'
      )

      // すでに sr-visible が付いていない要素だけ対象にする
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('sr-visible')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )

      targets.forEach((el) => {
        el.classList.remove('sr-visible')
        obs.observe(el)
      })

      return () => obs.disconnect()
    }, 80)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
