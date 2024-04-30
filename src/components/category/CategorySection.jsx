import React from 'react'
import Link from 'next/link'

const CategorySection = () => {
  return (
    <section className="fz-1-category-section">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">CATEGORY <span className='fz-section-sub-title'>商品カテゴリー</span></h2>
            </div>

            <div className="row g-md-4 g-3 justify-content-center align-items-center align-items-xl-stretch">
                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    <Link href="/shop" className="fz-1-single-category">
                        <img src="/assets/images/howey.jpeg" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">WHEY (321)</h5>
                    </Link>

                    <Link href="/shop" className="fz-1-single-category">
                        <img src="/assets/images/top-bunner/1218946_m.jpg" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">SOY (154)</h5>
                    </Link>
                </div>

                <div className="col-xl-6 col-4 col-xxs-12">
                    <Link href="/shop" className="fz-1-single-category">
                        <img src="/assets/images/vegetable_daizu.png" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">ALL (48)</h5>
                    </Link>
                </div>

                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    <Link href="/shop" className="fz-1-single-category">
                        <img src="/assets/images/howey.jpeg" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">MIX (54)</h5>
                    </Link>

                    <Link href="/shop" className="fz-1-single-category">
                        <img src="/assets/images/casein.jpeg" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">CASEIN (54)</h5>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategorySection