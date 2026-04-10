import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Slideshow from '@/components/Slideshow'
import FadeUp from '@/components/FadeUp'
import Weather from '@/components/Weather'
import AboutReveal from '@/components/AboutReveal'
import { getNews } from '@/lib/notion'

export const metadata: Metadata = {
  title: 'ヒビノクラシ | 保育士が営む体験型宿泊施設 宮城県気仙沼市',
  description: '笑っても、泣いても、大丈夫。保育士が営む、家族まるごと受け入れる宿。宮城県気仙沼市の築100年の古民家で過ごす、小さくて温かい家族の暮らし。',
  alternates: { canonical: 'https://hibinokurashi.jp/' },
  openGraph: { url: 'https://hibinokurashi.jp/' },
}

const portalItems = [
  {
    href: '/stay/',
    label: '施設紹介',
    tag: 'STAY',
    img: '/images/interior-1.jpg',
  },
  {
    href: '/about/#features',
    label: '特徴',
    tag: 'FEATURES',
    img: '/images/girl-field.jpg',
  },
  {
    href: '/plan/',
    label: '宿泊プラン',
    tag: 'PLAN',
    img: '/images/tatami.jpg',
  },
]

const stripImgs = [
  '/images/exterior.jpg', '/images/girl-field.jpg', '/images/interior-1.jpg',
  '/images/nature.jpg', '/images/girl-smile.jpg', '/images/tatami.jpg',
  '/images/kids-1.jpg', '/images/coil.jpg',
]

export default async function Top() {
  const news = await getNews(3)

  return (
    <>
      {/* ── HERO (ロゴのみ) ── */}
      <section className="hero">
        <Slideshow />
        <div className="hero-overlay" />
        <h1 className="sr-only">ヒビノクラシ | 保育士が営む体験型宿泊施設 宮城県気仙沼市</h1>
        <div className="hero-logo-center">
          <Image
            src="/images/logo-color-full.png"
            alt="ヒビノクラシ"
            width={3288}
            height={3288}
            style={{ width: 'min(200px, 32vw)', height: 'auto' }}
            priority
          />
        </div>
      </section>

      {/* ── ABOUT (縦書き・くらすわの森完全再現) ── */}
      <section className="about-sec" aria-label="ヒビノクラシのコンセプト">
        <div className="about-sec__inner">

          {/* 見出し（左上） */}
          <div className="about-sec__heading">
            <p className="about-sec__heading-ja">ヒビノクラシとは</p>
            <p className="about-sec__heading-en">ABOUT HIBINOKURASHI</p>
          </div>

          {/* secondary：写真レイヤー（背面） */}
          <div className="about-sec__secondary">
            {/* メイン写真 + もっとみるバー */}
            <div className="about-sec__main">
              <div className="about-sec__main-img">
                <Image
                  src="/images/girl-yard.jpg"
                  alt="ヒビノクラシの庭"
                  width={900}
                  height={700}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            {/* サブ写真（左下・absolute） */}
            <div className="about-sec__aside">
              <Image
                src="/images/tatami.jpg"
                alt="古民家の和室"
                width={600}
                height={450}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* primary：縦書きテキスト（写真の上に absolute で重なる） */}
          <div className="about-sec__primary">
            {/* 右：縦書きタイトル（白背景カード） */}
            <div className="about-sec__title">
              <p className="about-sec__title-en">HIBINOKURASHI</p>
              <h2 className="about-sec__title-ja">
                <span>家族で〝ただいま〟と</span>
                <span>言いたくなる場所を、</span>
                <span>がんばる日々のまんなかに。</span>
              </h2>
            </div>
            {/* 左：縦書き本文（白背景カード） */}
            <div className="about-sec__desc">
              <p className="about-sec__desc-para">
                <span>こどもの幸せって、豊かさって、なんだろう。</span>
                <span>保育士として向き合い続ける中で</span>
                <span>気づいたのは——</span>
              </p>
              <p className="about-sec__desc-para">
                <span>幸せは特別な出来事よりも、</span>
                <span>日々の暮らしの中にある、ということ。</span>
              </p>
              <p className="about-sec__desc-para">
                <span>ヒビノクラシは、築100年の古民家で過ごす、</span>
                <span>小さくて温かい、あなたの家族の暮らしです。</span>
              </p>
              <p className="about-sec__desc-para">
                <span>おとなも、こどもも、ありのままでいい。</span>
              </p>
            </div>
          </div>

        </div>
        <AboutReveal />
      </section>

      {/* ── PHOTO STRIP ── */}
      <div className="photo-strip" aria-hidden="true">
        <div className="photo-strip-track">
          {[...stripImgs, ...stripImgs].map((src, i) => (
            <img key={i} src={src} alt="" width={300} height={200} style={{ height: 200, width: 'auto', objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} />
          ))}
        </div>
      </div>

      {/* ── PORTAL ── */}
      <section className="sec sec--bg portal-sec">
        <div className="wrap">
          <FadeUp>
            <div className="portal-intro">
              <div className="portal-intro-left">
                <p className="portal-intro-label">ヒビノクラシのご案内</p>
                <h2 className="portal-intro-title">保育士がいるから、<br />安心して遊べる宿。</h2>
                <p className="portal-intro-body">気仙沼の古民家で、海・山・里の自然体験を。保育士が常にそばにいるから、こどもは思いきり遊び、おとなはほっと息をつける。1日1組限定の完全貸し切り。他のご家族を気にせず、我が家のようにくつろいでいただけます。食事は地域の恵みをふんだんに使った手づくり。築100年の古民家で過ごす、小さくて温かい家族の時間を。</p>
                <Link href="/about/" className="btn btn--blue portal-intro-btn">ヒビノクラシの詳細はこちら <span className="arrow" /></Link>
              </div>
              <div className="portal-intro-right">
                <div className="portal-intro-imgs">
                  <div className="portal-intro-card">
                    <div className="portal-intro-img">
                      <Image src="/images/kids-1.jpg" alt="自然あそび" width={300} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p className="portal-intro-caption"><span>「どこまで行けるかな？」</span>野山・海の自然体験</p>
                  </div>
                  <div className="portal-intro-card">
                    <div className="portal-intro-img">
                      <Image src="/images/interior-1.jpg" alt="古民家の空間" width={300} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p className="portal-intro-caption"><span>「ただいま。」</span>築100年の古民家に泊まる</p>
                  </div>
                  <div className="portal-intro-card">
                    <div className="portal-intro-img">
                      <Image src="/images/nature.jpg" alt="海・自然散策" width={300} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p className="portal-intro-caption"><span>「もっと行きたい！」</span>海・山の自然散策</p>
                  </div>
                  <div className="portal-intro-card">
                    <div className="portal-intro-img">
                      <Image src="/images/tatami.jpg" alt="和の食卓" width={300} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p className="portal-intro-caption"><span>「おかわり！」</span>地の恵みの手づくりごはん</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
          <ul className="portal-list">
            {portalItems.map(({ href, label, tag, img }, i) => (
              <li key={href} className="portal-item">
                <FadeUp delay={i * 80}>
                  <Link href={href} className="portal-link">
                    <div className="portal-card">
                      <Image
                        src={img}
                        alt={label}
                        width={600}
                        height={600}
                        className="portal-card__img"
                      />
                      <div className="portal-card__label">
                        <span className="portal-card__title">{label}</span>
                        <span className="portal-card__arrow">
                          <svg width="6" height="9" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '2px'}}>
                            <path d="M1 1L8 7L1 13" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title" style={{ textAlign: 'left' }}>
              <span className="en">NEWS</span>
              <span className="ja" style={{ fontSize: 22 }}>お知らせ</span>
            </div>
            {news.length > 0 ? (
              <ul className="news-list">
                {news.map(item => (
                  <li key={item.id} className="news-row">
                    <time className="news-date" dateTime={item.date}>
                      {item.date ? new Date(item.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                    </time>
                    {item.category && <span className="news-tag">{item.category}</span>}
                    <span className="news-ttl">{item.title}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: 'var(--c-text-2)', fontSize: 14, padding: '40px 0', textAlign: 'center' }}>現在準備中です。</p>
            )}
            <div style={{ textAlign: 'center', marginTop: 120 }}>
              <Link href="/news/" className="btn btn--ghost" style={{ fontSize: 13 }}>すべて見る <span className="arrow" /></Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="sec sec--bg">
        <div className="wrap">
          <FadeUp>
            <div className="location-grid">
              <div className="location-img">
                <Image src="/images/girl-yard.jpg" alt="気仙沼の暮らし" width={600} height={450} style={{ width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 12 }} />
              </div>
              <div className="location-body">
                <div className="sec-title" style={{ textAlign: 'left', marginBottom: 24 }}>
                  <span className="en">LOCATION</span>
                  <span className="ja" style={{ fontSize: 22 }}>海と山に囲まれたまち<br />宮城県気仙沼市</span>
                </div>
                <p>宮城県の最北端にある気仙沼市。世界三大漁場のひとつ三陸沖に面し、今も全国から漁船が集まる港町です。</p>
                <p>海沿いを離れると、気仙沼湾を見渡せる安波山や、四季ごとに色を変える田園風景が広がります。</p>
                <Link href="/access/" className="btn btn--blue" style={{ marginTop: 24 }}>アクセスを見る <span className="arrow" /></Link>
              </div>
            </div>
            <Weather />
          </FadeUp>
        </div>
      </section>

    </>
  )
}
