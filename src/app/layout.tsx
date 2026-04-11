import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import StickyCta from '@/components/StickyCta'
import LoadingScreen from '@/components/LoadingScreen'
import './globals.css'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  preload: false, // 日本語は文字数が多いためpreloadはfalse
})

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
  preload: false,
})

const lodgingBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'ヒビノクラシ',
  description: '保育士が営む築100年の古民家体験型宿泊施設。1日1組限定の完全貸し切りで、家族まるごとを受け入れる宿。宮城県気仙沼市。',
  url: 'https://hibinokurashi.jp/',
  telephone: '080-9657-1238',
  email: 'info@hibinokurashi.com',
  address: {
    '@type': 'PostalAddress',
    postalCode: '988-0824',
    addressRegion: '宮城県',
    addressLocality: '気仙沼市',
    streetAddress: '川原崎182',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.9,
    longitude: 141.57,
  },
  image: 'https://hibinokurashi.jp/images/exterior.jpg',
  priceRange: '¥¥',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '保育士常駐', value: true },
    { '@type': 'LocationFeatureSpecification', name: '1日1組限定', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: '無料駐車場', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'ベビー用品貸し出し', value: true },
  ],
  numberOfRooms: 1,
  checkinTime: '15:00',
  checkoutTime: '10:00',
  starRating: { '@type': 'Rating', ratingValue: '5' },
  sameAs: ['https://www.instagram.com/hibinokurashi/'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hibinokurashi.jp'),
  title: {
    default: 'ヒビノクラシ | 保育士が営む体験型宿泊施設 宮城県気仙沼市',
    template: '%s | ヒビノクラシ',
  },
  description: '笑っても、泣いても、大丈夫。保育士が営む、家族まるごと受け入れる宿。宮城県気仙沼市の築100年の古民家で過ごす、小さくて温かい家族の暮らし。',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon-32.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'ヒビノクラシ',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'ヒビノクラシ' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessJsonLd) }}
        />
      </head>
      <body>
        {GTM_ID && (
          <>
            {/* GTM — head スニペット */}
            <Script id="gtm-head" strategy="afterInteractive">{`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}</Script>
            {/* GTM — noscript フォールバック */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
        <a href="#main-content" className="skip-link">コンテンツへスキップ</a>
        <LoadingScreen />
        <ScrollReveal />
        <Header />
        <main id="main-content">{children}</main>
        <StickyCta />
        <Footer />
      </body>
    </html>
  )
}
