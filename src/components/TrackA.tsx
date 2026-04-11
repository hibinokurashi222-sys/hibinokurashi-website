'use client'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { pushEvent } from '@/lib/gtm'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  gtmEvent: string
  gtmLabel?: string
  children: ReactNode
}

/**
 * GTM イベント付き <a> タグ
 * mailto: / tel: リンクのトラッキングに使用
 */
export default function TrackA({ gtmEvent, gtmLabel, onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        pushEvent({ event: gtmEvent, button_label: gtmLabel ?? '' })
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
