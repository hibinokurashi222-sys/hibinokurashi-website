'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // ページ遷移時にリセット
    el.classList.remove('in')

    // 動きを抑える設定のユーザーはアニメーションなしで即表示
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in')
      return
    }

    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('in'), delay)
            obs.unobserve(el)
          }
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )
      obs.observe(el)
      return () => obs.disconnect()
    }, 80)

    return () => clearTimeout(timer)
  }, [pathname, delay])

  return <div ref={ref} className="fade-up">{children}</div>
}
