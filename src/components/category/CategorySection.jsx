import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FarzaaContext } from '../../context/FarzaaContext'

const CategorySection = () => {
    const {
        allProducts
    } = useContext(FarzaaContext)
  return (
    <section className="fz-1-category-section">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">CATEGORY <span className='fz-section-sub-title'>商品カテゴリー</span></h2>
            </div>

            <div className="row g-md-4 g-3 justify-content-center align-items-center align-items-xl-stretch">
                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    <Link href="/shop?category=ホエイプロテイン" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/why_protain.png" alt="Product Icon" width={1000} height={1000} style={{maxHeight:"100%"}} />
                        <h5 className="fz-1-single-category__title">WHEY ({allProducts.filter(product => product.category === "ホエイプロテイン").length})</h5>
                    </Link>

                    <Link href="/shop?category=ソイプロテイン" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/soy_protein.png" alt="Product Icon" width={1000} height={1000} style={{maxHeight:"100%"}} />
                        <h5 className="fz-1-single-category__title">SOY ({allProducts.filter(product => product.category === "ソイプロテイン").length})</h5>
                    </Link>
                </div>

                <div className="col-xl-6 col-4 col-xxs-12">
                    <Link href="/shop" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/all_protain.png" alt="Product Icon"  width={1000} height={1000} style={{maxHeight:"100%"}}/>
                        <h5 className="fz-1-single-category__title">ALL ({allProducts.length})</h5>
                    </Link>
                </div>

                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    <Link href="/shop?category=混合プロテイン" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/mixed_protein.jpg" alt="Product Icon"  width={1000} height={1000} style={{maxHeight:"100%"}}/>
                        <h5 className="fz-1-single-category__title">MIX ({allProducts.filter(product => product.category === "混合プロテイン").length})</h5>
                    </Link>

                    <Link href="/shop?category=カゼインプロテイン" className="fz-1-single-category" style={{position:"relative"}}>
                        <Image src="/assets/images/top-bunner/casein_protein.png" alt="Product Icon"  width={1000} height={1000} style={{maxHeight:"100%"}}/>
                        <h5 className="fz-1-single-category__title">CASEIN ({allProducts.filter(product => product.category === "カゼインプロテイン").length})</h5>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategorySection