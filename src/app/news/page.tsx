import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import { getNews } from '@/lib/notion'

export const metadata: Metadata = {
  title: 'お知らせ',
  description: 'ヒビノクラシからのお知らせ・最新情報。',
}
export const revalidate = 60

export default async function News() {
  const news = await getNews(30)

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/girl-smile.jpg')" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-body">
          <span className="page-hero-en">NEWS</span>
          <h1 className="page-hero-title">お知らせ</h1>
        </div>
      </section>

      {/* ── NEWS LIST ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">NEWS</span>
              <span className="ja">最新のお知らせ</span>
            </div>
          </FadeUp>
          {news.length === 0 ? (
            <FadeUp delay={80}>
              <div className="news-empty">
                <p>現在、お知らせはありません。</p>
                <Link href="/" className="btn btn--ghost" style={{ marginTop: 24 }}>トップへ戻る <span className="arrow" /></Link>
              </div>
            </FadeUp>
          ) : (
            <ul className="news-list news-list--full">
              {news.map((item, i) => (
                <FadeUp key={item.id} delay={i * 40}>
                  <li className="news-row">
                    <time className="news-date" dateTime={item.date}>
                      {item.date
                        ? new Date(item.date).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : ''}
                    </time>
                    {item.category && <span className="news-tag">{item.category}</span>}
                    <span className="news-ttl">{item.title}</span>
                  </li>
                </FadeUp>
              ))}
            </ul>
          )}
        </div>
      </section>

      <div className="back-to-top">
        <a href="/" className="back-to-top__btn">← トップページへ戻る</a>
      </div>

    </>
  )
}
