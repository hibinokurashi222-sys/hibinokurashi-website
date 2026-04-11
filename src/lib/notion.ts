import { Client, isFullPage } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

// Notionデータベース/データソースID
const DATABASE_ID = process.env.NOTION_DATA_SOURCE_ID ?? process.env.NOTION_DATABASE_ID ?? '33c82c47-b4e7-8090-bb90-000b452e1a0e'

export type NewsItem = {
  id: string
  title: string
  date: string
  category: string
}

export type Block = {
  id: string
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
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
      data_source_id: DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: { equals: true },
      },
      sorts: [{ property: '日付', direction: 'descending' }],
      page_size: limit,
    })
    return (res.results ?? [])
      .filter(isFullPage)
      .map((p: Parameters<typeof isFullPage>[0] & { id: string; properties: Record<string, unknown> }) => ({
        id: p.id,
        title: txt(p.properties['名前']),
        date: txt(p.properties['日付']),
        category: txt(p.properties['Category']),
      }))
  } catch {
    return []
  }
}

export async function getNewsItem(id: string): Promise<NewsItem | null> {
  if (!process.env.NOTION_TOKEN) return null
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const client = notion as any
    const res = await client.dataSources.query({
      data_source_id: DATABASE_ID,
      filter: {
        and: [
          { property: 'Published', checkbox: { equals: true } },
        ],
      },
      page_size: 100,
    })
    const page = (res.results ?? []).find((p: { id: string }) => p.id === id)
    if (!page || !isFullPage(page)) return null
    const p = page as Parameters<typeof isFullPage>[0] & { id: string; properties: Record<string, unknown> }
    return {
      id: p.id,
      title: txt(p.properties['名前']),
      date: txt(p.properties['日付']),
      category: txt(p.properties['Category']),
    }
  } catch {
    return null
  }
}

export async function getNewsBlocks(pageId: string): Promise<Block[]> {
  if (!process.env.NOTION_TOKEN) return []
  try {
    const res = await notion.blocks.children.list({ block_id: pageId, page_size: 100 })
    return res.results as Block[]
  } catch {
    return []
  }
}

export async function getNewsIds(): Promise<string[]> {
  if (!process.env.NOTION_TOKEN) return []
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const client = notion as any
    const res = await client.dataSources.query({
      data_source_id: DATABASE_ID,
      filter: { property: 'Published', checkbox: { equals: true } },
      page_size: 100,
    })
    return (res.results ?? []).map((p: { id: string }) => p.id)
  } catch {
    return []
  }
}
