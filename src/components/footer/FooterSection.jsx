import React from 'react'
import Link from 'next/link';

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
                                <li><Link href="#">Shop on Facebook</Link></li>
                                <li><Link href="#">Shop on Ebay</Link></li>
                                <li><Link href="/shop">Shop All</Link></li>
                                <li><Link href="#">Coupons and Discounts</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">商品一覧</h5>
                            <ul>
                                <li><Link href="#">全て</Link></li>
                                <li><Link href="#">ホエイプロテイン</Link></li>
                                <li><Link href="#">ソイプロテイン</Link></li>
                                <li><Link href="#">混合プロテイン</Link></li>
                                <li><Link href="#">カゼインプロテイン</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">ヘルプ</h5>
                            <ul>
                                <li><Link href="/about">Our Story</Link></li>
                                <li><Link href="/blog">Blog & Press</Link></li>
                                <li><Link href="#">Order History</Link></li>
                                <li><Link href="#">Wish List</Link></li>
                                <li><Link href="#">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer__contact-info">
                            <h5 className="fz-footer-widget__title">ストアの情報</h5>
                            <ul>
                                <li>
                                    <Link href="#"><i className="fa-light fa-location-dot"></i> 16 Rr 2, Ketchikan, Alaska 99901, USA</Link>
                                </li>
                                <li>
                                    <Link href="tel:9072254144"><i className="fa-light fa-phone"></i> (907) 225-4144</Link>
                                </li>
                                <li>
                                    <Link href="mailto:info@webmail.com"><i className="fa-light fa-envelope-open-text"></i>info@webmail.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection