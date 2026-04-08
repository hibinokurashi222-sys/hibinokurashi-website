import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-inner">
        <Image
          src="/images/logo-color-full.png"
          alt="ヒビノクラシ"
          width={3288}
          height={3288}
          className="notfound-logo"
        />
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">ページが見つかりません</h1>
        <p className="notfound-body">
          お探しのページは移動または削除された可能性があります。<br />
          トップページからお探しください。
        </p>
        <Link href="/" className="btn btn--blue">トップページへ戻る <span className="arrow" /></Link>
      </div>
    </div>
  )
}
