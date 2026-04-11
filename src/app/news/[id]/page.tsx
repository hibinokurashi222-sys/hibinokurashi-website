import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FadeUp from '@/components/FadeUp'
import { getNewsItem, getNewsBlocks, getNewsIds, type Block } from '@/lib/notion'

export const dynamicParams = false

export async function generateStaticParams() {
  const ids = await getNewsIds()
  // Notion疎通不可など空の場合でもビルド失敗させないためのフォールバック
  if (ids.length === 0) return [{ id: 'placeholder' }]
  return ids.map(id => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const item = await getNewsItem(id)
  return {
    title: item?.title ?? 'お知らせ',
    description: item?.title ?? 'ヒビノクラシからのお知らせ',
  }
}

function richText(texts: { plain_text: string; annotations?: { bold?: boolean; italic?: boolean; code?: boolean }; href?: string | null }[]) {
  return texts.map((t, i) => {
    let el: React.ReactNode = t.plain_text
    if (t.annotations?.code) el = <code key={i}>{el}</code>
    if (t.annotations?.bold) el = <strong key={i}>{el}</strong>
    if (t.annotations?.italic) el = <em key={i}>{el}</em>
    if (t.href) el = <a key={i} href={t.href} target="_blank" rel="noopener noreferrer">{el}</a>
    return <span key={i}>{el}</span>
  })
}

function renderBlock(block: Block) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={block.id} className="notion-p">
          {richText(block.paragraph?.rich_text ?? [])}
        </p>
      )
    case 'heading_1':
      return <h2 key={block.id} className="notion-h1">{richText(block.heading_1?.rich_text ?? [])}</h2>
    case 'heading_2':
      return <h3 key={block.id} className="notion-h2">{richText(block.heading_2?.rich_text ?? [])}</h3>
    case 'heading_3':
      return <h4 key={block.id} className="notion-h3">{richText(block.heading_3?.rich_text ?? [])}</h4>
    case 'bulleted_list_item':
      return <li key={block.id} className="notion-li">{richText(block.bulleted_list_item?.rich_text ?? [])}</li>
    case 'numbered_list_item':
      return <li key={block.id} className="notion-li">{richText(block.numbered_list_item?.rich_text ?? [])}</li>
    case 'quote':
      return <blockquote key={block.id} className="notion-quote">{richText(block.quote?.rich_text ?? [])}</blockquote>
    case 'divider':
      return <hr key={block.id} className="notion-hr" />
    case 'image': {
      const src = block.image?.file?.url ?? block.image?.external?.url ?? ''
      const caption = block.image?.caption?.map((t: { plain_text: string }) => t.plain_text).join('') ?? ''
      return (
        <figure key={block.id} className="notion-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )
    }
    default:
      return null
  }
}

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [item, blocks] = await Promise.all([getNewsItem(id), getNewsBlocks(id)])

  if (!item) notFound()

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/girl-smile.jpg')" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-body">
          <span className="page-hero-en">NEWS</span>
          <h1 className="page-hero-title">お知らせ</h1>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap wrap--narrow">
          <FadeUp>
            <div className="news-detail-header">
              <div className="news-detail-meta">
                <time dateTime={item.date}>
                  {item.date
                    ? new Date(item.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : ''}
                </time>
                {item.category && <span className="news-tag">{item.category}</span>}
              </div>
              <h2 className="news-detail-title">{item.title}</h2>
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <div className="notion-body">
              {blocks.map(block => renderBlock(block))}
            </div>
          </FadeUp>

          <FadeUp delay={120}>
            <div className="news-detail-back">
              <Link href="/news/" className="btn btn--ghost">← お知らせ一覧へ</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
