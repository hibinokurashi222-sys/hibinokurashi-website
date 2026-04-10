import type { Metadata } from 'next'
import Image from 'next/image'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'アクセス',
  description: '宮城県気仙沼市「ヒビノクラシ」へのアクセス。車・新幹線＋BRTの行き方と所要時間、最寄りバス停からの経路、周辺の観光スポット情報をご案内します。',
  alternates: { canonical: 'https://hibinokurashi.jp/access/' },
  openGraph: { url: 'https://hibinokurashi.jp/access/' },
}

export default function Access() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/nature.jpg')" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-body">
          <span className="page-hero-en">ACCESS</span>
          <h1 className="page-hero-title">アクセス</h1>
        </div>
      </section>

      {/* ── ADDRESS ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">LOCATION</span>
              <span className="ja">所在地・周辺環境</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="access-location-grid">
              <div className="access-location-text">
                <p className="access-address">〒988-0824<br />宮城県気仙沼市川原崎182</p>
                <p>
                  宮城県の最北端、三陸海岸の南端に位置する気仙沼市。海と山に囲まれた豊かな自然の中に、ヒビノクラシはあります。
                </p>
                <p>
                  仙台からは車で約2時間。都市の喧騒から離れ、港町のゆったりとした時間の流れを感じてください。
                </p>
                <a
                  href="https://maps.google.com/?q=気仙沼市"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                  style={{ marginTop: 24, display: 'inline-flex' }}
                >
                  Google マップで見る <span className="arrow" />
                </a>
              </div>
              <div className="access-location-img">
                <Image
                  src="/images/exterior.jpg"
                  alt="ヒビノクラシ外観"
                  width={560}
                  height={420}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── MAP ── */}
      <div className="map-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48000!2d141.569!3d38.909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a4d3d4b5e7a9f%3A0x1234567890abcdef!2z5a6H5LmF5aOu5biC!5e0!3m2!1sja!2sjp!4v1234567890"
          width="100%"
          height="460"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ヒビノクラシへのアクセスマップ"
        />
      </div>

      {/* ── HOW TO GET ── */}
      <section className="sec sec--bg">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">HOW TO GET THERE</span>
              <span className="ja">交通案内</span>
            </div>
          </FadeUp>
          <div className="access-grid">
            <FadeUp delay={0}>
              <div className="access-card">
                <p className="access-label">CAR</p>
                <h3>お車でお越しの方</h3>
                <ul>
                  <li>三陸自動車道「気仙沼IC」より約○○分</li>
                  <li>駐車場：無料・○台分</li>
                  <li>カーナビ設定先は別途ご案内します</li>
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={80}>
              <div className="access-card">
                <p className="access-label">TRAIN / BRT</p>
                <h3>電車・BRTでお越しの方</h3>
                <ul>
                  <li>JR気仙沼線BRT「気仙沼駅」下車</li>
                  <li>駅からタクシーで約○○分</li>
                  <li>送迎：ご相談ください（要事前予約）</li>
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={160}>
              <div className="access-card">
                <p className="access-label">FLIGHT / BUS</p>
                <h3>飛行機・高速バスでお越しの方</h3>
                <ul>
                  <li>仙台空港よりレンタカーで約2時間</li>
                  <li>仙台駅から高速バス「ケセンライナー」で約2時間30分</li>
                  <li>仙台駅からの送迎はご相談ください</li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── NEARBY ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">NEARBY</span>
              <span className="ja">周辺のスポット</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="nearby-grid">
              <div className="nearby-card">
                <div className="nearby-card-img">
                  <Image src="/images/nature.jpg" alt="気仙沼の海" width={400} height={260} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="nearby-card-body">
                  <h3>気仙沼湾</h3>
                  <p>豊かな漁場として知られる気仙沼湾。海辺での磯遊びや、漁港の朝市も楽しめます。</p>
                </div>
              </div>
              <div className="nearby-card">
                <div className="nearby-card-img">
                  <Image src="/images/exterior-2.jpg" alt="安波山" width={400} height={260} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="nearby-card-body">
                  <h3>安波山</h3>
                  <p>気仙沼湾を一望できる展望スポット。山頂からの景色は絶景です。</p>
                </div>
              </div>
              <div className="nearby-card">
                <div className="nearby-card-img">
                  <Image src="/images/nature.jpg" alt="里山の風景" width={400} height={260} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="nearby-card-body">
                  <h3>里山の風景</h3>
                  <p>四季折々に表情を変える里山。のどかな自然の中をゆっくり散策できます。</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="back-to-top">
        <a href="/" className="back-to-top__btn">← トップページへ戻る</a>
      </div>

    </>
  )
}
