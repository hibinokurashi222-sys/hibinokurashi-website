import type { Metadata } from 'next'
import Image from 'next/image'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'ヒビノクラシについて',
  description: '保育士が営む、気仙沼市の古民家宿泊施設「ヒビノクラシ」について。想いと、スタッフと、この場所のことを。',
}

const features = [
  {
    n: '01',
    title: '保育士が常にそばに。',
    body: '保育士資格をもつスタッフが常駐しているから、こどもの気持ちを理解し、ありのままを受け入れます。泣いても、騒いでも、大丈夫。おとなは安心してゆっくりと息をつけます。',
  },
  {
    n: '02',
    title: '1日1組、完全貸し切り。',
    body: '他のご家族を気にすることなく、古民家全体を自分たちだけで使えます。こどもが走り回っても、大声で笑っても、お気に入りの場所でごろごろしても——本当の意味で「我が家」のように過ごしてください。',
  },
  {
    n: '03',
    title: '地域と、つながる体験。',
    body: '気仙沼の海・山・畑——地元の自然や生産者さんと触れ合うことができます。ただ泊まるだけでなく、その土地の暮らしを体験することで、家族の記憶に残る旅になります。',
  },
  {
    n: '04',
    title: '築100年の古民家、まるごと。',
    body: '太い梁、縁側、囲炉裏——時間が止まったような空間で過ごす一夜は、日常をすこし離れるきっかけになります。掃除も整備も行き届いた、清潔で快適な古民家です。',
  },
]

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/exterior.jpg')" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-body">
          <span className="page-hero-en">ABOUT</span>
          <h1 className="page-hero-title">ヒビノクラシについて</h1>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="sec sec--white">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">OUR STORY</span>
              <span className="ja">ヒビノクラシが生まれた理由</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="about-story">
              <div className="about-story-img">
                <Image
                  src="/images/girl-yard.jpg"
                  alt="ヒビノクラシの庭"
                  width={560}
                  height={420}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
                />
              </div>
              <div className="about-story-text">
                <p className="about-story-lead">こどもの幸せって、豊かさって、なんだろう。</p>
                <p>
                  保育士として長年こどもたちと向き合ってきた中で、ずっとそんな問いを抱えていました。
                </p>
                <p>
                  気づいたのは——幸せは特別な出来事よりも、日々の暮らしの中にある、ということ。おいしいごはん、縁側での昼寝、畑でとれた野菜を一緒に食べること。土を触ること、虫を捕まえること。そんな小さな積み重ねが、家族の記憶をつくっていく。
                </p>
                <p>
                  築100年の古民家を拠点に、気仙沼の海・山・畑と共に暮らす体験を提供したい。そんな想いから、ヒビノクラシは生まれました。
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── HOST ── */}
      <section className="sec sec--bg">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">HOST</span>
              <span className="ja">運営者について</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="host-grid">
              <div className="host-img">
                <Image
                  src="/images/family.jpg"
                  alt="ヒビノクラシを運営する家族"
                  width={560}
                  height={420}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
                />
              </div>
              <div className="host-text">
                <p className="host-name">一般社団法人 日々</p>
                <p>
                  宮城県気仙沼市を拠点に、「日々の暮らし」をテーマとした活動を続けています。保育士資格をもつスタッフが中心となり、家族がありのままでいられる場所をつくることを目指しています。
                </p>
                <p>
                  「笑っても、泣いても、大丈夫。」——この言葉が私たちの原点です。こどもの気持ちを受け止め、おとなが安心して過ごせる。そんな宿でありたいと思っています。
                </p>
                <p>
                  気仙沼の自然・食・文化を体験を通じてお届けし、この地域をもっと好きになってもらえるきっかけをつくりたいと考えています。
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sec sec--white" id="features">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">FEATURES</span>
              <span className="ja">ヒビノクラシの4つの特徴</span>
            </div>
          </FadeUp>
          <div className="features-list">
            {features.map(({ n, title, body }, i) => (
              <FadeUp key={n} delay={i * 80}>
                <div className="feature-row">
                  <span className="feature-num">{n}</span>
                  <div className="feature-body">
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  {i % 2 === 0 ? (
                    <div className="feature-img">
                      <Image
                        src={i === 0 ? '/images/nursery.jpg' : '/images/kids-1.jpg'}
                        alt={title}
                        width={400}
                        height={300}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
                      />
                    </div>
                  ) : (
                    <div className="feature-img">
                      <Image
                        src={i === 1 ? '/images/interior-1.jpg' : '/images/nature.jpg'}
                        alt={title}
                        width={400}
                        height={300}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
                      />
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACE ── */}
      <section className="sec sec--bg">
        <div className="wrap">
          <FadeUp>
            <div className="sec-title">
              <span className="en">THE PLACE</span>
              <span className="ja">築100年の古民家</span>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="place-grid">
              <Image src="/images/exterior.jpg" alt="外観" width={600} height={400} />
              <Image src="/images/interior-2.jpg" alt="室内" width={600} height={400} />
              <Image src="/images/tatami.jpg" alt="和室" width={600} height={400} />
              <Image src="/images/coil.jpg" alt="縁側" width={600} height={400} />
            </div>
            <p className="place-caption">
              宮城県気仙沼市に佇む築100年の古民家。太い梁と高い天井、縁側から見える庭——時間がゆっくりと流れる空間です。清潔に整えられた室内で、現代の快適さと古民家の温もりを両立しています。
            </p>
          </FadeUp>
        </div>
      </section>

    </>
  )
}
