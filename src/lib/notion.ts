import { Client, isFullPage } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export type NewsItem = {
  id: string
  title: string
  date: string
  category: string
  excerpt: string
}

function txt(prop: unknown): string {
  if (!prop || typeof prop !== 'object') return ''
  const p = prop as Record<string, unknown>
  if (p.type === 'title' && Array.isArray(p.title))
    return (p.title as {plain_text:string}[]).map(t => t.plain_text).join('')
  if (p.type === 'rich_text' && Array.isArray(p.rich_text))
    return (p.rich_text as {plain_text:string}[]).map(t => t.plain_text).join('')
  if (p.type === 'select' && p.select) return (p.select as {name:string}).name ?? ''
  if (p.type === 'date' && p.date) return (p.date as {start:string}).start ?? ''
  return ''
}

export async function getNews(limit = 10): Promise<NewsItem[]> {
  if (!process.env.NOTION_TOKEN) return mock(limit)
  try {
    const res = await notion.search({
      filter: { property: 'object', value: 'page' },
      sort: { direction: 'descending', timestamp: 'last_edited_time' },
      page_size: limit * 2,
    })
    return res.results
      .filter(isFullPage)
      .filter(p => {
        const pub = p.properties['Published']
        if (!pub || typeof pub !== 'object') return true
        const pp = pub as Record<string, unknown>
        return pp.type !== 'checkbox' || pp.checkbox === true
      })
      .slice(0, limit)
      .map(p => ({
        id: p.id,
        title: txt(p.properties['Title'] ?? p.properties['名前']),
        date: txt(p.properties['Date'] ?? p.properties['日付']),
        category: txt(p.properties['Category'] ?? p.properties['カテゴリ']),
        excerpt: txt(p.properties['Excerpt'] ?? p.properties['概要']),
      }))
  } catch {
    return mock(limit)
  }
}

function mock(limit: number): NewsItem[] {
  return [
    { id:'1', title:'ヒビノクラシの飲食事業がはじまります', date:'2026-04-01', category:'お知らせ', excerpt:'宿泊に加え、地元食材を使ったお食事の提供を開始します。' },
    { id:'2', title:'春の予約受付を開始しました', date:'2026-03-15', category:'予約情報', excerpt:'2026年4〜6月の宿泊予約を受け付けております。' },
    { id:'3', title:'気仙沼の春——畑に新しい命が芽吹いています', date:'2026-03-01', category:'スタッフブログ', excerpt:'3月に入り、畑では早くも新芽が出てきました。' },
  ].slice(0, limit)
}
