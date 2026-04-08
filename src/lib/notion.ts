import { Client, isFullPage } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

// data_source_id（データベース作成時に取得）
const DATA_SOURCE_ID = process.env.NOTION_DATA_SOURCE_ID ?? 'c9251130-8408-48b5-b317-792c87248737'

export type NewsItem = {
  id: string
  title: string
  date: string
  category: string
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
  if (!process.env.NOTION_TOKEN) return []
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const client = notion as any
    const res = await client.dataSources.query({
      data_source_id: DATA_SOURCE_ID,
      filter: {
        property: 'Published',
        checkbox: { equals: true },
      },
      sorts: [{ property: 'Date', direction: 'descending' }],
      page_size: limit,
    })
    return (res.results ?? [])
      .filter(isFullPage)
      .map((p: Parameters<typeof isFullPage>[0] & { id: string; properties: Record<string, unknown> }) => ({
        id: p.id,
        title: txt(p.properties['Title']),
        date: txt(p.properties['Date']),
        category: txt(p.properties['Category']),
      }))
  } catch {
    return []
  }
}
