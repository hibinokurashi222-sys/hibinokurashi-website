import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'よくある質問',
  description: 'ヒビノクラシへのよくある質問（FAQ）。ご予約方法・施設設備・お食事内容・赤ちゃん連れ・アレルギー対応など、ご不明な点をまとめてご確認いただけます。',
  alternates: { canonical: 'https://hibinokurashi.jp/faq/' },
  openGraph: { url: 'https://hibinokurashi.jp/faq/' },
}

const faqs = [
  {
    category: 'ご予約について',
    items: [
      {
        q: '予約はどのように行いますか？',
        a: '現在、メール・お電話にてご予約を承っております。お問い合わせフォームまたは電話（080-9657-1238）よりご連絡ください。空き状況を確認の上、2営業日以内にご返信いたします。',
      },
      {
        q: 'キャンセルポリシーを教えてください。',
        a: 'ご予約確定後のキャンセルについては、7日前まで無料、3〜6日前は50%、2日前〜当日は100%のキャンセル料をいただいております。詳細はご予約時にご案内します。',
      },
      {
        q: '何名から予約できますか？',
        a: '1家族（大人2名〜）からご利用いただけます。最大で大人4名・こども4名程度まで対応可能です。2家族での合同利用もご相談ください。',
      },
      {
        q: '日帰り利用はできますか？',
        a: '現在は宿泊（1泊2日〜）のご利用のみ承っております。日帰り体験プランについては今後検討中です。',
      },
    ],
  },
  {
    category: '施設について',
    items: [
      {
        q: 'チェックイン・チェックアウトの時間は？',
        a: 'チェックインは15:00〜18:00、チェックアウトは10:00までです。時間の変更をご希望の場合はご相談ください。',
      },
      {
        q: '他のお客様と一緒になることはありますか？',
        a: 'ヒビノクラシは1日1組限定の完全貸し切りです。他のご家族と一緒になることはありません。古民家全体をご家族だけでお使いいただけます。',
      },
      {
        q: '駐車場はありますか？',
        a: 'あります。無料でご利用いただけます。詳しい駐車場の場所はご予約確定後にご案内します。',
      },
      {
        q: 'Wi-Fiは使えますか？',
        a: 'はい、施設内でWi-Fiをご利用いただけます。接続情報はチェックイン時にお伝えします。',
      },
    ],
  },
  {
    category: 'お子さまについて',
    items: [
      {
        q: '何歳から利用できますか？',
        a: '何歳のお子さまでも大歓迎です。0歳の赤ちゃんから、小学生・中学生まで、保育士スタッフが安心してお過ごしいただけるようサポートします。',
      },
      {
        q: 'ベビー用品は借りられますか？',
        a: 'はい、哺乳瓶・消毒セット・おむつ・ベビーバス・ベビーチェア・ベビーベッド・おもちゃ・絵本などを無料でご利用いただけます。身軽にお越しください。',
      },
      {
        q: '保育士スタッフはどのような対応をしてくれますか？',
        a: '保育士資格をもつスタッフが滞在中のサポートをいたします。こどもの遊び相手、食事のサポート、自然体験の案内など、こどもと一緒に過ごしながら、おとなの方がゆっくりできる時間をつくります。',
      },
    ],
  },
  {
    category: 'お食事について',
    items: [
      {
        q: '食事はどのような内容ですか？',
        a: '夕食・朝食が含まれています。地元気仙沼の生産者さんから届く旬の食材を使い、食品添加物を使わない手づくり料理をご提供します。内容は季節や食材の状況により変わります。',
      },
      {
        q: 'アレルギー対応はできますか？',
        a: 'はい、対応可能です。ご予約時に必ずアレルギーの内容をお知らせください。内容を確認の上、対応できるかご連絡いたします。',
      },
      {
        q: '離乳食の対応はできますか？',
        a: 'はい、月齢に合わせた離乳食をご用意できます。ご予約時にお子さまの月齢をお知らせください。',
      },
      {
        q: '食事なしのプランはありますか？',
        a: '現在は食事付きプランのみの提供となっています。食材アレルギーや特別な事情がある場合はご相談ください。',
      },
    ],
  },
  {
    category: 'アクセスについて',
    items: [
      {
        q: '最寄り駅からの行き方を教えてください。',
        a: 'JR気仙沼線BRT「気仙沼駅」が最寄りです。駅からタクシーで約○○分です。送迎をご希望の場合は事前にご相談ください（要事前予約）。',
      },
      {
        q: '仙台からどのくらいかかりますか？',
        a: 'お車で約2時間、高速バス「ケセンライナー」で約2時間30分です。東京からは新幹線で一ノ関または新花巻乗り換え、または高速バスをご利用いただけます。',
      },
    ],
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap(({ items }) =>
    items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    }))
  ),
}

export default function Faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/kids-1.jpg')" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-body">
          <span className="page-hero-en">FAQ</span>
          <h1 className="page-hero-title">よくある質問</h1>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec sec--white">
        <div className="wrap-xs">
          {faqs.map(({ category, items }, ci) => (
            <FadeUp key={category} delay={ci * 60}>
              <div className="faq-group">
                <h2 className="faq-category">{category}</h2>
                <dl className="faq-list">
                  {items.map(({ q, a }) => (
                    <article key={q} className="faq-item">
                      <dt className="faq-q">
                        <span className="faq-icon">Q</span>
                        {q}
                      </dt>
                      <dd className="faq-a">
                        <span className="faq-icon faq-icon--a">A</span>
                        {a}
                      </dd>
                    </article>
                  ))}
                </dl>
              </div>
            </FadeUp>
          ))}

          <FadeUp>
            <div className="faq-contact">
              <p>ご不明な点はお気軽にお問い合わせください。</p>
              <div className="faq-contact-btns">
                <a href="mailto:info@hibinokurashi.com" className="btn btn--blue">メールで問い合わせる <span className="arrow" /></a>
                <a href="tel:08096571238" className="btn btn--ghost">電話で問い合わせる <span className="arrow" /></a>
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
