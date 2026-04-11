'use client'
import dynamic from 'next/dynamic'

const GoogleMap = dynamic(() => import('./GoogleMap'), {
  ssr: false,
  loading: () => <div className="map-wrap map-wrap--loading" style={{ height: 460 }} />,
})

export default function MapSection() {
  return <GoogleMap />
}
