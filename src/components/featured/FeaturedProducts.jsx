import React, { useContext } from 'react'
import { FarzaaContext } from '../../context/FarzaaContext'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedProducts = () => {
    const {
        addToWishlist,
        allProducts
    } = useContext(FarzaaContext)
  return (
    <section className="featured-product-section">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">Featured Product <span className='fz-section-sub-title'>おすすめ商品</span></h2>
            </div>

            <div className="row gy-4">
                {allProducts.slice(-3).map((item) => (
                  <div className="col-4 col-xxs-12" key={item.id}>
                    <div className="fz-feat-single-product fz-1-single-product">
                        <div className="fz-single-product__img" style={{position:"relative"}}>
                            <Image src={item.imgSrc[0]} alt="Product image" width={500} height={500} />
                            {item.oldPrice?<span className="fz-single-product__tag">-30%</span>:""}

                            <div className="fz-single-product__actions">
                                <button 
                                className="fz-add-to-wishlist-btn"
                                onClick={() => addToWishlist(item.id)}
                                >
                                    <span className="btn-txt">add To wishlist</span>
                                    <span className="btn-icon">{item.isInWishlist? (<i className="fa-solid fa-heart"></i>):(<i className="fa-light fa-heart"></i>)}</span>
                                </button>
                            </div>
                        </div>

                        <div className="fz-single-product__txt">
                            <h3 className="fz-single-product__title"><Link href={`/shop/${item.id}`} className="fz-single-product__title">{item.name}</Link></h3>
                            <p className="fz-single-product__price">
                                <span className="current-price">&yen;{item.price.toLocaleString()}</span>
                                {item.oldPrice?<span className="prev-price text-decoration-line-through">&yen;{item.oldPrice.toLocaleString()}</span>:""}
                            </p>
                        </div>
                    </div>
                </div>  
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts