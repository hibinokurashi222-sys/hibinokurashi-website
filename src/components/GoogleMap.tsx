'use client'
import { useEffect, useRef, useState } from 'react'
import { setOptions, importLibrary } from '@googlemaps/js-api-loader'

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''

// ── スポット定義 ────────────────────────────────────────────────────────────
type Spot = {
  lat: number
  lng: number
  name: string
  desc: string
  tag?: string
  isMain?: boolean
}

const SPOTS: Spot[] = [
  {
    lat: 38.9022,
    lng: 141.5694,
    name: 'ヒビノクラシ',
    desc: '〒988-0824 宮城県気仙沼市川原崎182<br>保育士が営む体験型宿泊施設',
    isMain: true,
  },
  {
    lat: 38.9010,
    lng: 141.5720,
    name: '気仙沼内湾エリア',
    desc: '復興後に整備されたにぎわいエリア。地元の飲食店や産直市場が並ぶ気仙沼の顔。',
    tag: 'グルメ・文化',
  },
  {
    lat: 38.8968,
    lng: 141.5730,
    name: '気仙沼魚市場',
    desc: '全国屈指の水揚げ量を誇る漁港。新鮮なメカジキ・さんまを間近で楽しめます。',
    tag: 'グルメ・文化',
  },
  {
    lat: 38.9135,
    lng: 141.5578,
    name: '安波山',
    desc: '気仙沼湾を一望できる展望スポット。標高239mの山頂からの絶景は必見です。',
    tag: '自然・観光',
  },
  {
    lat: 38.8720,
    lng: 141.6090,
    name: '大島',
    desc: '気仙沼湾に浮かぶ離島。フェリーで約15分。豊かな自然と海水浴が楽しめます。',
    tag: '自然・観光',
  },
]

// ── マップスタイル（アースカラー） ──────────────────────────────────────────
const MAP_STYLES: google.maps.MapTypeStyle[] = [
  { elementType: 'geometry', stylers: [{ color: '#f5f1eb' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1eb' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#5c5142' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#a8c8d8' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#4a7fa0' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#e8e0d4' }] },
  { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#d4c9b8' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c8b89a' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#c8dab0' }] },
  { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#7a6e5f' }],
  },
]

// ── カスタムマーカーSVG ─────────────────────────────────────────────────────
const mkSvgUrl = (color: string, r: number) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${r * 2}" height="${r * 2.6}" viewBox="0 0 ${r * 2} ${r * 2.6}">` +
    `<path d="M${r} 0C${r * 0.45} 0 0 ${r * 0.45} 0 ${r}c0 ${r * 0.69} ${r} ${r * 1.6} ${r} ${r * 1.6}s${r}-${r * 0.91} ${r}-${r * 1.6}C${r * 2} ${r * 0.45} ${r * 1.55} 0 ${r} 0z" fill="${color}"/>` +
    `<circle cx="${r}" cy="${r}" r="${r * 0.55}" fill="white"/>` +
    `<circle cx="${r}" cy="${r}" r="${r * 0.32}" fill="${color}"/>` +
    `</svg>`,
  )}`

// ── コンポーネント ──────────────────────────────────────────────────────────
export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    if (!mapRef.current) return
    if (!API_KEY) {
      setLoadError(true)
      return
    }

    setOptions({ key: API_KEY, language: 'ja', region: 'JP', v: 'weekly' })

    ;(async () => {
      try {
        const [{ Map, InfoWindow }, { Marker }, { Size, Point }] = await Promise.all([
          importLibrary('maps'),
          importLibrary('marker'),
          importLibrary('core'),
        ])

        const map = new Map(mapRef.current!, {
          center: { lat: 38.9022, lng: 141.5694 },
          zoom: 13,
          styles: MAP_STYLES,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: true,
        })

        let openInfoWindow: google.maps.InfoWindow | null = null

        SPOTS.forEach((spot) => {
          const mainColor = '#4a7c59'
          const subColor = '#c8a96e'
          const isMain = !!spot.isMain
          const color = isMain ? mainColor : subColor
          const r = isMain ? 16 : 11

          const icon: google.maps.Icon = {
            url: mkSvgUrl(color, r),
            scaledSize: new Size(r * 2, r * 2.6),
            anchor: new Point(r, r * 2.6),
          }

          const marker = new Marker({
            position: { lat: spot.lat, lng: spot.lng },
            map,
            title: spot.name,
            icon,
            zIndex: isMain ? 10 : 1,
          })

          const tagHtml = isMain
            ? `<span style="font-size:10px;font-weight:700;color:${mainColor};letter-spacing:.12em;display:block;margin-bottom:4px;">HIBINOKURASHI</span>`
            : spot.tag
            ? `<span style="font-size:10px;font-weight:700;color:${subColor};letter-spacing:.1em;display:block;margin-bottom:4px;">${spot.tag}</span>`
            : ''

          const infoWindow = new InfoWindow({
            content:
              `<div style="padding:10px 14px;max-width:240px;font-family:'Noto Sans JP',sans-serif;line-height:1;">` +
              tagHtml +
              `<strong style="font-size:14px;color:#333;line-height:1.4;display:block;margin-bottom:6px;">${spot.name}</strong>` +
              `<p style="font-size:12px;color:#666;line-height:1.75;margin:0;">${spot.desc}</p>` +
              `</div>`,
            pixelOffset: new Size(0, isMain ? -8 : -4),
          })

          marker.addListener('click', () => {
            openInfoWindow?.close()
            infoWindow.open({ anchor: marker, map })
            openInfoWindow = infoWindow
          })

          // 拠点マーカーは最初から開く
          if (isMain) {
            infoWindow.open({ anchor: marker, map })
            openInfoWindow = infoWindow
          }
        })
      } catch {
        setLoadError(true)
      }
    })()
  }, [])

  if (loadError) {
    return (
      <div className="map-wrap map-wrap--fallback" style={{ height: 460 }}>
        <p>
          地図を読み込めませんでした。
          <a
            href="https://maps.google.com/?q=宮城県気仙沼市川原崎182"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Google マップで見る →
          </a>
        </p>
      </div>
    )
  }

  return (
    <div
      ref={mapRef}
      className="map-wrap"
      style={{ height: 460 }}
      aria-label="ヒビノクラシ周辺マップ"
      role="application"
    />
  )
}
