'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const MS_PER_CHAR = 70

export default function AboutReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const section = document.querySelector<HTMLElement>('.about-sec')
    if (!section) return

    const titleSpans = Array.from(
      section.querySelectorAll<HTMLElement>('.about-sec__title-ja > span')
    )
    const desc = section.querySelector<HTMLElement>('.about-sec__desc')

    // 動きを抑える設定のユーザーはアニメーションなしで即表示
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // 初期状態
    titleSpans.forEach(el => { el.style.clipPath = 'inset(0 0 100% 0)' })
    if (desc) { desc.style.opacity = '0'; desc.style.transition = 'opacity 0.8s ease' }

    // タイトル3行のアニメーション計画
    let offset = 0
    const plan = titleSpans.map(el => {
      const chars = el.textContent?.length ?? 1
      const duration = chars * MS_PER_CHAR
      const delay = offset
      offset += duration
      return { el, duration, delay }
    })

    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // タイトル3行を順番にワイプ
            const START_DELAY = 200
            plan.forEach(({ el, duration, delay }) => {
              setTimeout(() => {
                el.style.transition = `clip-path ${duration}ms linear`
                el.style.clipPath = 'inset(0 0 0% 0)'
              }, START_DELAY + delay)
            })
            // 全タイトルが出た後に本文を一気に表示
            if (desc) {
              setTimeout(() => { desc.style.opacity = '1' }, START_DELAY + offset)
            }
            obs.unobserve(section)
          }
        },
        { threshold: 0.05 }
      )
      obs.observe(section)
      return () => obs.disconnect()
    }, 80)

    return () => {
      clearTimeout(timer)
      titleSpans.forEach(el => { el.style.clipPath = ''; el.style.transition = '' })
      if (desc) { desc.style.opacity = ''; desc.style.transition = '' }
    }
  }, [pathname])

  return null
}
