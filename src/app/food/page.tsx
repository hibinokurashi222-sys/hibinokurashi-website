import type { Metadata } from 'next'
import Image from 'next/image'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'お食事について',
  description: '気仙沼の地元食材を使ったヒビノクラシの手づくりごはん。食品添加物を使わず、体に優しい素材をいかした温かい家庭料理をご提供します。',
  alternates: { canonical: 'https://hibinokurashi.jp/food/' },
  openGraph: { url: 'https://hibinokurashi.jp/food/' },
}

export default function Food() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/photo-1.jpg')" }} />
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
                  気仙沼港に水揚げされた新鮮な魚介、地元生産者さんのこだわりの食材——素材そのものの力を引き出すシンプルな調理で、食卓をととのえます。
                </p>
                <p>
                  食品添加物は使いません。こどもが口にするものだから、素材と向き合い、体に優しいごはんを丁寧につくっています。
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

      {/* ── LOCAL ── */}
      <section className="sec sec--bg">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">FROM LOCAL PRODUCERS</span>
              <span className="ja">地元の食材から、体に優しい食卓へ</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="food-row">
              <div className="food-row-img">
                <Image src="/images/nature.jpg" alt="気仙沼の自然" width={560} height={420} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }} />
              </div>
              <div className="food-row-text">
                <h2>添加物を使わず、素材と向き合う。</h2>
                <p>
                  気仙沼の地元生産者さんから届く旬の野菜、港に水揚げされた新鮮な魚介。食品添加物は使わず、素材そのものの味を大切にした手づくりごはんをご提供します。
                </p>
                <p>
                  こどもが安心して食べられるものを、おとなも一緒においしく。家族みんなの体に優しい食卓です。
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
                <p>地元食材を使ったシンプルな和朝食。炊きたてのごはん、お味噌汁、おかず数品。食品添加物を使わない、体にすっと入る温かい朝ごはんをご用意します。</p>
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
              <Image src="/images/kids-1.jpg" alt="自然体験" width={600} height={400} />
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
