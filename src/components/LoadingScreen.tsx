'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [exiting, setExiting] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 2200)
    const t2 = setTimeout(() => setDone(true), 3000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  const r = 120
  const cx = 160
  const cy = 160
  const circumference = 2 * Math.PI * r
  const text = 'ヒビノクラシ  ·  宮城県気仙沼市  ·  保育士が営む宿  ·  '

  return (
    <div className={`loading-screen${exiting ? ' loading-screen--exit' : ''}`}>
      <div className="loading-logo-wrap">
        <svg
          className="loading-ring"
          viewBox="0 0 320 320"
          width="320"
          height="320"
          aria-hidden="true"
        >
          <defs>
            <path
              id="circlePath"
              d={`M ${cx},${cy - r} A ${r},${r} 0 1,1 ${cx - 0.001},${cy - r}`}
            />
          </defs>
          <text className="loading-ring__text">
            <textPath href="#circlePath" textLength={circumference} lengthAdjust="spacing">
              {text}
            </textPath>
          </text>
        </svg>
        <div className="loading-logo">
          <Image
            src="/images/logo-color-full.png"
            alt="ヒビノクラシ"
            width={3288}
            height={3288}
            priority
          />
        </div>
      </div>
    </div>
  )
}
