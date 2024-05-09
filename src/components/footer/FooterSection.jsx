import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="fz-footer-section fz-1-footer-section">
        <div className="fz-footer-top">
            <div className="container">
                <div className="row gy-md-5 gy-4 justify-content-center justify-content-lg-between">
                    

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">サイトについて</h5>
                            <ul>
                                <li><Link href="/">ホーム</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">商品一覧</h5>
                            <ul>
                                <li><Link href="/shop">全て</Link></li>
                                <li><Link href="/shop?category=ホエイプロテイン">ホエイプロテイン</Link></li>
                                <li><Link href="/shop?category=ソイプロテイン">ソイプロテイン</Link></li>
                                <li><Link href="/shop?category=混合プロテイン">混合プロテイン</Link></li>
                                <li><Link href="/shop?category=カゼインプロテイン">カゼインプロテイン</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">ヘルプ</h5>
                            <ul>
                                <li><Link href="/contact">お問い合わせ</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer__contact-info" style={{position:"relative"}}>
                            <Image fetchpriority="high" src='/assets/images/logo/logo_black.png' alt="footer logo" className="fz-logo" width={400} height={500} style={{width:"95%"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection