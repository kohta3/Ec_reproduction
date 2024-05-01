import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const CategorySection = () => {
  return (
    <section className="fz-1-category-section">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">CATEGORY <span className='fz-section-sub-title'>商品カテゴリー</span></h2>
            </div>

            <div className="row g-md-4 g-3 justify-content-center align-items-center align-items-xl-stretch">
                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    <Link href="/shop?category=whey" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/why_protain.png" alt="Product Icon" fill style={{maxHeight:"100%"}} />
                        <h5 className="fz-1-single-category__title">WHEY (321)</h5>
                    </Link>

                    <Link href="/shop?category=soy" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/soy_protein.png" alt="Product Icon" fill style={{maxHeight:"100%"}} />
                        <h5 className="fz-1-single-category__title">SOY (154)</h5>
                    </Link>
                </div>

                <div className="col-xl-6 col-4 col-xxs-12">
                    <Link href="/shop?category=all" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/all_protain.png" alt="Product Icon" fill style={{maxHeight:"100%"}}/>
                        <h5 className="fz-1-single-category__title">ALL (48)</h5>
                    </Link>
                </div>

                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    <Link href="/shop?category=mix" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/mixed_protein.jpg" alt="Product Icon" fill style={{maxHeight:"100%"}}/>
                        <h5 className="fz-1-single-category__title">MIX (54)</h5>
                    </Link>

                    <Link href="/shop?category=casein" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/casein_protein.png" alt="Product Icon" fill style={{maxHeight:"100%"}}/>
                        <h5 className="fz-1-single-category__title">CASEIN (54)</h5>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategorySection