import Link from 'next/link'
import Image from 'next/image'

const nav = [
  { href: '/about',  label: '施設紹介'  },
  { href: '/stay',   label: '宿泊プラン' },
  { href: '/food',   label: 'お食事'    },
  { href: '/news',   label: 'お知らせ'  },
  { href: '/faq',    label: 'よくある質問' },
  { href: '/access', label: 'アクセス'  },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA帯 */}
      <div className="footer-cta">
        <div className="footer-cta__text">
          <p className="footer-cta__title">ご予約・お問い合わせ</p>
          <p className="footer-cta__sub">1日1組限定。お気軽にご相談ください。</p>
        </div>
        <Link href="/stay#reserve" className="footer-cta__btn">予約する <span className="arrow" /></Link>
      </div>

      {/* メイン */}
      <div className="footer-main">
        <div className="footer-main__left">
          <Image src="/images/logo-footer.png" alt="ヒビノクラシ" width={300} height={80} className="footer-logo" />
        </div>
        <div className="footer-main__right">
          <nav className="footer-nav">
            <h4>CONTENTS</h4>
            <ul>
              {nav.map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav className="footer-nav">
            <h4>FOLLOW</h4>
            <ul>
              <li><a href="https://www.instagram.com/hibinokurashi/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">公式LINE</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* コピーライト */}
      <div className="footer-bottom">
        <p className="footer-copy">&copy; 2026 ヒビノクラシ All Rights Reserved.</p>
      </div>
    </footer>
  )
}
