'use client'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { pushEvent } from '@/lib/gtm'

type Props = ComponentProps<typeof Link> & {
  gtmEvent: string
  gtmLabel?: string
  children: ReactNode
}

/**
 * GTM イベント付き Next.js Link
 * クリック時に dataLayer.push を実行する
 */
export default function TrackLink({ gtmEvent, gtmLabel, onClick, children, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        pushEvent({ event: gtmEvent, button_label: gtmLabel ?? '' })
        onClick?.(e)
      }}
    >
      {children}
    </Link>
  )
}
