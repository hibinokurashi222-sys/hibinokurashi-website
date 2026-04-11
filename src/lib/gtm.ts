export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? ''

type GtmEventData = {
  event: string
  [key: string]: string | number | boolean | undefined
}

/** GTM dataLayer にイベントを送信する */
export function pushEvent(data: GtmEventData): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(data)
}

// ── 定義済みイベント ──────────────────────────────────────────────────────

/** 予約ボタンクリック（Google Ad Grants コンバージョン） */
export const trackReserve = (label: string) =>
  pushEvent({ event: 'reserve_click', button_label: label })

/** メール問い合わせクリック */
export const trackEmailContact = (label = 'メールで問い合わせる') =>
  pushEvent({ event: 'contact_click', contact_method: 'email', button_label: label })

/** 電話問い合わせクリック */
export const trackPhoneContact = (label = '電話で問い合わせる') =>
  pushEvent({ event: 'contact_click', contact_method: 'phone', button_label: label })
