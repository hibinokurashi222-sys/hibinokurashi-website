'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import TrackLink from './TrackLink'

const nav = [
  { href: '/',        label: 'ホーム'    },
  { href: '/about/',  label: '施設紹介'  },
  { href: '/stay/',   label: '宿泊プラン' },
  { href: '/food/',   label: 'お食事'    },
  { href: '/news/',   label: 'お知らせ'  },
  { href: '/faq/',    label: 'よくある質問' },
  { href: '/access/', label: 'アクセス'  },
]

export default function Header() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false) // ヒーローを超えたか
  const [shadow, setShadow]     = useState(false)  // 少しスクロールしたか
  const pathname = usePathname()
  const isTop = pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShadow(y > 10)
      // トップページのみ：ヒーローの高さ（= 画面高さ - ヘッダー72px）を超えたらlogo表示
      if (isTop) {
        const heroH = window.innerHeight - 72
        setScrolled(y > heroH * 0.6)
      } else {
        setScrolled(true)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isTop])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header id="header" className={shadow ? 'shadow' : ''}>
        <div className="header-inner">
          <Link href="/" className={`header-logo${scrolled ? ' visible' : ''}`} tabIndex={scrolled ? 0 : -1}>
            <Image src="/images/logo-header.png" alt="ヒビノクラシ" width={200} height={54} style={{ height: 44, width: 'auto' }} priority />
          </Link>

          <button
            className={`nav-toggle${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="メニュー"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`nav-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <nav className={`nav-drawer${open ? ' open' : ''}`} aria-label="サイトメニュー" aria-hidden={!open} inert={!open || undefined}>
        <div className="nav-drawer-inner">
          <Link href="/" className="nav-drawer-logo">
            <Image src="/images/logo-header.png" alt="ヒビノクラシ" width={200} height={54} style={{ height: 72, width: 'auto' }} />
          </Link>
          <ul className="nav-drawer-list">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-drawer-cta">
            <TrackLink href="/stay/#reserve" className="btn btn--blue" gtmEvent="reserve_click" gtmLabel="nav_drawer_cta">
              ご予約・お問い合わせ <span className="arrow" />
            </TrackLink>
          </div>
          <p className="nav-drawer-tel">TEL: <a href="tel:08096571238">080-9657-1238</a><br /><span>受付 9:00〜17:00</span></p>
        </div>
      </nav>
    </>
  )
}
