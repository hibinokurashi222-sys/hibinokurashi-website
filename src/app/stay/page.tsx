import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: '施設紹介',
  description: '気仙沼市の古民家でのご宿泊。貸し切りだからできる、家族まるごとの体験。施設・設備・予約方法をご案内します。',
}

const amenities = [
  '哺乳瓶・消毒セット',
  'おむつ・お尻拭き',
  'ベビーバス',
  'ベビーチェア',
  'ベビーベッド',
  'おもちゃ・絵本',
  'バスタオル・タオル',
  'ドライヤー',
  'Wi-Fi完備',
  'エアコン',
  '洗濯機（無料）',
  'シャンプー・ソープ類',
]

const rooms = [
  { img: '/images/tatami.jpg', title: '和室（8畳）', desc: '古民家らしい落ち着いた和室。布団を敷いてゆったりお休みいただけます。' },
  { img: '/images/interior-1.jpg', title: 'リビング・ダイニング', desc: '家族みんなで食事や団らんができる、広々とした共有スペース。' },
  { img: '/images/interior-2.jpg', title: '縁側', desc: '庭を眺めながらのんびり過ごせる縁側。気仙沼の四季を感じる特等席。' },
  { img: '/images/girl-yard.jpg', title: '庭・外遊びスペース', desc: 'こどもが思いきり遊べる広い庭。畑も隣接しています。' },
]

const flows = [
  { n: '01', title: 'お問い合わせ・ご予約', body: '下記のメールフォームまたはお電話にてご連絡ください。空き状況をご確認の上、折り返しご連絡いたします。' },
  { n: '02', title: '内容のご確認', body: 'ご宿泊日、人数、食事アレルギー、ご要望などをお伺いします。詳細はメールにてご案内します。' },
  { n: '03', title: 'ご入金', body: '予約確定後、宿泊費のご入金をお願いします。お支払い方法はメールにてご案内します。' },
  { n: '04', title: 'チェックイン', body: 'チェックイン：15:00〜 / チェックアウト：10:00。到着時にスタッフがご案内します。ゆっくりとお越しください。' },
]

export default function Stay() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/interior-1.jpg')" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-body">
          <span className="page-hero-en">STAY</span>
          <h1 className="page-hero-title">施設紹介</h1>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">OVERVIEW</span>
              <span className="ja">ご宿泊の概要</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="stay-overview-grid">
              <div className="stay-overview-text">
                <p className="stay-overview-lead">
                  1棟まるごと、あなたの家族だけの宿。
                </p>
                <p>
                  古民家全体を1日1組で貸し切り。他のご家族を気にすることなく、食事も、お風呂も、外遊びも——すべてのんびりと自分たちのペースで楽しめます。
                </p>
                <p>
                  保育士スタッフが常にそばにいるから、こどもは思いきり遊べて、おとなは本当の意味でほっと息をつける。そんな時間をお届けします。
                </p>
              </div>
              <div className="stay-overview-table">
                <table className="info-table">
                  <tbody>
                    <tr><th>形式</th><td>1棟貸し切り（1〜2家族）</td></tr>
                    <tr><th>定員</th><td>大人4名・こども4名まで（応相談）</td></tr>
                    <tr><th>チェックイン</th><td>15:00 〜 18:00</td></tr>
                    <tr><th>チェックアウト</th><td>〜 10:00</td></tr>
                    <tr><th>食事</th><td>夕食・朝食付き（地元食材使用）</td></tr>
                    <tr><th>料金</th><td>1棟 ¥30,000〜（内容・時期により変動）</td></tr>
                    <tr><th>駐車場</th><td>あり（無料）</td></tr>
                    <tr><th>ペット</th><td>ご相談ください</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── ROOMS ── */}
      <section className="sec sec--bg">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">ROOMS & SPACES</span>
              <span className="ja">施設の様子</span>
            </div>
          </FadeUp>
          <div className="rooms-grid">
            {rooms.map(({ img, title, desc }, i) => (
              <FadeUp key={title} delay={i * 60}>
                <div className="room-card">
                  <div className="room-card-img">
                    <Image src={img} alt={title} width={600} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="room-card-body">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">AMENITIES</span>
              <span className="ja">子育て用品・設備、完備。</span>
            </div>
            <p className="sec-lead">荷物を気にせず、身軽にお越しください。よく使う子育て用品はすべて揃えています。</p>
            <div className="amenity-grid">
              {amenities.map((label) => (
                <div key={label} className="amenity-item">
                  <span className="amenity-check">✓</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="sec sec--bg">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">EXPERIENCE</span>
              <span className="ja">滞在中にできること</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="exp-grid">
              <div className="exp-card">
                <div className="exp-card-img">
                  <Image src="/images/girl-field.jpg" alt="畑体験" width={480} height={320} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="exp-card-body">
                  <h3>畑・農業体験</h3>
                  <p>宿のすぐそばにある畑で、野菜の収穫や土いじりを体験できます。採れたての野菜はそのまま食卓へ。</p>
                </div>
              </div>
              <div className="exp-card">
                <div className="exp-card-img">
                  <Image src="/images/nature.jpg" alt="自然体験" width={480} height={320} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="exp-card-body">
                  <h3>海・山の自然体験</h3>
                  <p>気仙沼の豊かな自然を満喫。海辺での磯遊びや、山歩きなど季節に合わせた体験をご提案します。</p>
                </div>
              </div>
              <div className="exp-card">
                <div className="exp-card-img">
                  <Image src="/images/kids-1.jpg" alt="外あそび" width={480} height={320} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="exp-card-body">
                  <h3>庭でのびのびと</h3>
                  <p>広い庭で虫捕り、かけっこ、泥んこ遊び。保育士がそばにいるから、思いきり遊べます。</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FLOW ── */}
      <section className="sec sec--white">
        <div className="wrap-xs">
          <FadeUp>
            <div className="sec-title">
              <span className="en">FLOW</span>
              <span className="ja">ご予約の流れ</span>
            </div>
          </FadeUp>
          <div className="flow-list">
            {flows.map(({ n, title, body }, i) => (
              <FadeUp key={n} delay={i * 80}>
                <div className="flow-item">
                  <span className="flow-num">{n}</span>
                  <div className="flow-body">
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVE ── */}
      <section className="sec sec--bg" id="reserve">
        <div className="wrap-xs">
          <FadeUp>
            <div className="sec-title">
              <span className="en">RESERVE</span>
              <span className="ja">ご予約・お問い合わせ</span>
            </div>
            <div className="reserve-box">
              <p>現在、メール・お電話にてご予約を承っております。<br />空き状況やご不明な点もお気軽にお問い合わせください。</p>
              <div className="reserve-contacts">
                <a href="mailto:info@hibinokurashi.com" className="btn btn--blue">メールで問い合わせる <span className="arrow" /></a>
              </div>
              <p className="reserve-note">受付時間：9:00〜18:00（不定休）<br />お返事は2営業日以内を目安にご連絡いたします。</p>
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
