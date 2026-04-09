import type { Metadata } from 'next'
import Image from 'next/image'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'お食事について',
  description: '気仙沼の地元食材を使った、ヒビノクラシのお食事。畑から食卓へ。旬を味わう、温かいごはん。',
}

export default function Food() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/girl-field.jpg')" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-body">
          <span className="page-hero-en">FOOD</span>
          <h1 className="page-hero-title">お食事について</h1>
        </div>
      </section>

      {/* ── CONCEPT ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">CONCEPT</span>
              <span className="ja">食へのこだわり</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="food-concept">
              <div className="food-concept-text">
                <p className="food-concept-lead">「おいしい」は、こどもの記憶に残る。</p>
                <p>
                  地元の食材を、旬のうちに、丁寧に。それだけを大切にしています。
                </p>
                <p>
                  宿のすぐそばにある畑で育てた野菜、気仙沼港に水揚げされた新鮮な魚介、地元生産者さんのこだわりの食材——素材そのものの力を引き出すシンプルな調理で、食卓をととのえます。
                </p>
                <p>
                  こどもと一緒に収穫した野菜が夕飯に並ぶ。「これ、さっき採ったやつだ！」という発見と喜びも、ヒビノクラシの食事の一部です。
                </p>
              </div>
              <div className="food-concept-img">
                <Image
                  src="/images/photo-1.jpg"
                  alt="食卓の様子"
                  width={560}
                  height={420}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── HARVEST ── */}
      <section className="sec sec--bg">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">FROM THE FIELD</span>
              <span className="ja">畑から食卓へ</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="food-row">
              <div className="food-row-img">
                <Image src="/images/girl-field.jpg" alt="畑で遊ぶ子ども" width={560} height={420} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }} />
              </div>
              <div className="food-row-text">
                <h2>農薬を使わず、土と向き合う。</h2>
                <p>
                  宿に隣接した畑では、農薬・化学肥料を使わずに野菜を育てています。季節によって採れるものが変わるので、来るたびに違う表情の食卓をお楽しみいただけます。
                </p>
                <p>
                  こどもと一緒に収穫体験もできます。泥だらけになりながら掘ったじゃがいも、木から取ったトマト——食べる前から体験は始まっています。
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SEA ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="food-row food-row--rev">
              <div className="food-row-img">
                <Image src="/images/nature.jpg" alt="気仙沼の海" width={560} height={420} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }} />
              </div>
              <div className="food-row-text">
                <p className="food-row-label">FROM THE SEA</p>
                <h2>気仙沼の海の恵み。</h2>
                <p>
                  世界三大漁場のひとつ、三陸の海に面した気仙沼。新鮮な魚介が毎日港に水揚げされます。地元の漁師さんや仲買人さんとのつながりを活かして、旬の魚介を食卓にお届けします。
                </p>
                <p>
                  メカジキ、さんま、牡蠣、ホタテ——港町ならではの豊かな食文化を体験してください。
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className="sec sec--bg">
        <div className="wrap-xs">
          <FadeUp>
            <div className="sec-title">
              <span className="en">MENU</span>
              <span className="ja">食事の内容</span>
            </div>
            <div className="menu-grid">
              <div className="menu-card">
                <p className="menu-card-label">DINNER</p>
                <h3>夕食</h3>
                <p>旬の野菜を使った季節の料理を中心に、気仙沼の魚介を添えてお出しします。地元の発酵食品や保存食も取り入れた、滋味あふれる食卓です。アレルギー・離乳食にも対応しますので、ご予約時にご相談ください。</p>
              </div>
              <div className="menu-card">
                <p className="menu-card-label">BREAKFAST</p>
                <h3>朝食</h3>
                <p>畑の野菜を使ったシンプルな和朝食。炊きたてのごはん、お味噌汁、おかず数品。ゆっくりと一日をはじめるための、温かい朝ごはんをご用意します。</p>
              </div>
            </div>
            <p className="menu-note">※食事内容は時期・食材の状況により変わります。食物アレルギーのある方は必ずご予約時にお知らせください。</p>
          </FadeUp>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">GALLERY</span>
              <span className="ja">食事の写真</span>
            </div>
            <div className="food-photo-grid">
              <Image src="/images/photo-1.jpg" alt="食事の様子" width={600} height={400} />
              <Image src="/images/photo-2.jpg" alt="食材" width={600} height={400} />
              <Image src="/images/girl-field.jpg" alt="収穫体験" width={600} height={400} />
              <Image src="/images/nature.jpg" alt="気仙沼の自然" width={600} height={400} />
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
