import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import StickyCta from '@/components/StickyCta'
import LoadingScreen from '@/components/LoadingScreen'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ヒビノクラシ | 保育士が営む体験型宿泊施設 宮城県気仙沼市',
    template: '%s | ヒビノクラシ',
  },
  description: '笑っても、泣いても、大丈夫。保育士が営む、家族まるごと受け入れる宿。宮城県気仙沼市の築100年の古民家で過ごす、小さくて温かい家族の暮らし。',
  openGraph: { type: 'website', siteName: 'ヒビノクラシ', locale: 'ja_JP' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LoadingScreen />
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <StickyCta />
        <Footer />
      </body>
    </html>
  )
}
