import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: '宿泊プラン',
  description: 'ヒビノクラシの宿泊プランをご案内します。1棟貸し切り、保育士常駐、食事付きの体験型宿泊。',
}

const plans = [
  {
    id: 'standard',
    label: 'PLAN 01',
    title: 'スタンダードプラン',
    subtitle: '古民家に泊まる、1泊2日',
    desc: '夕食・朝食付きのスタンダードプラン。築100年の古民家で、気仙沼の食材を使った手づくりの食事と、のんびりとした時間をお楽しみください。',
    price: '¥30,000〜',
    unit: '（1棟）',
    includes: ['夕食・朝食', '子育て用品一式', '1棟貸し切り', '保育士スタッフ常駐'],
    img: '/images/tatami.jpg',
  },
  {
    id: 'experience',
    label: 'PLAN 02',
    title: '体験プラン',
    subtitle: '自然・畑・海を満喫する、1泊2日',
    desc: 'スタンダードプランに加え、畑での収穫体験や、気仙沼の自然を体験するアクティビティを組み込んだプラン。こどもたちの「はじめて」がたくさん詰まった2日間です。',
    price: '¥38,000〜',
    unit: '（1棟）',
    includes: ['夕食・朝食', '子育て用品一式', '1棟貸し切り', '保育士スタッフ常駐', '畑・収穫体験', '自然体験アクティビティ'],
    img: '/images/girl-field.jpg',
  },
  {
    id: 'extended',
    label: 'PLAN 03',
    title: '連泊プラン',
    subtitle: '気仙沼の暮らしを、ゆっくりと。2泊3日',
    desc: '2泊3日でじっくりと気仙沼を楽しむプラン。2日目は自由に海や市内を散策、夜はスタッフと一緒に焚き火を囲んで。非日常の中に、暮らしのリズムを感じる滞在です。',
    price: '¥55,000〜',
    unit: '（1棟）',
    includes: ['夕食×2・朝食×2', '子育て用品一式', '1棟貸し切り', '保育士スタッフ常駐', '畑・収穫体験', '焚き火体験'],
    img: '/images/coil.jpg',
  },
]

export default function Plan() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/interior-2.jpg')" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-body">
          <span className="page-hero-en">PLAN</span>
          <h1 className="page-hero-title">宿泊プラン</h1>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="sec sec--white">
        <div className="wrap-xs">
          <FadeUp>
            <div className="sec-title">
              <span className="en">OUR PLANS</span>
              <span className="ja">プランのご案内</span>
            </div>
            <p className="sec-lead">
              すべてのプランに、食事・子育て用品・保育士スタッフ常駐が含まれています。<br />
              ご家族の旅の目的に合わせてお選びください。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── PLANS ── */}
      {plans.map(({ id, label, title, subtitle, desc, price, unit, includes, img }, i) => (
        <section key={id} className={`sec ${i % 2 === 0 ? 'sec--bg' : 'sec--white'}`}>
          <div className="wrap">
            <FadeUp>
              <div className={`plan-row${i % 2 === 1 ? ' plan-row--rev' : ''}`}>
                <div className="plan-row-img">
                  <Image
                    src={img}
                    alt={title}
                    width={560}
                    height={420}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
                  />
                </div>
                <div className="plan-row-body">
                  <p className="plan-label">{label}</p>
                  <h2 className="plan-title">{title}</h2>
                  <p className="plan-subtitle">{subtitle}</p>
                  <p className="plan-desc">{desc}</p>
                  <ul className="plan-includes">
                    {includes.map((item) => (
                      <li key={item}>
                        <span className="plan-check">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="plan-price">
                    <span className="plan-price-num">{price}</span>
                    <span className="plan-price-unit">{unit}</span>
                  </div>
                  <Link href="/stay#reserve" className="btn btn--blue">このプランで予約する <span className="arrow" /></Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      ))}

      {/* ── NOTE ── */}
      <section className="sec sec--white">
        <div className="wrap-xs">
          <FadeUp>
            <div className="plan-note-box">
              <h3>ご注意事項</h3>
              <ul>
                <li>料金は1棟あたりの金額です。人数・時期により変動する場合があります。</li>
                <li>食物アレルギーのある方は必ずご予約時にお知らせください。</li>
                <li>チェックイン：15:00〜18:00 / チェックアウト：〜10:00</li>
                <li>ペットのご同伴はご相談ください。</li>
                <li>詳細はお問い合わせの際にご案内いたします。</li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

    </>
  )
}
