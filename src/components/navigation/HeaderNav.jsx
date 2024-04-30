import React from 'react'
import Link from 'next/link'

const HeaderNav = ({position}) => {
  return (
    <nav className="fz-header-nav">
        <ul className={`align-items-center ${position}`}>
            <li className="fz-nav-item"><Link href="/" className="fz-nav-link">ホーム</Link></li>
            <li className="fz-nav-item"><Link href="/shop" className="fz-nav-link">商品一覧</Link></li>
            <li className="fz-nav-item"><Link href="/contact" className="fz-nav-link">お問い合わせ</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderNav