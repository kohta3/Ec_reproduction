import React, { useContext } from 'react'
import { FarzaaContext } from '../../context/FarzaaContext'
import Link from 'next/link'
import Image from 'next/image'

const RelatedProductSection = () => {
    const {
        paginatedProducts,
        addToCart,
        addToWishlist
    } = useContext(FarzaaContext)
  return (
    <section className="related-product-section">
        <div className="container">
            <h2 className="related-product__title">関連の商品</h2>
            <div className="row gy-sm-4 g-3 justify-content-center">
                {paginatedProducts.slice(0,4).map((item) => (
                   <div className="col-lg-3 col-md-4 col-6 col-xxs-12" key={item.id}>
                    <div className="fz-1-single-product">
                        <div className="fz-single-product__img" style={{position:"relative"}}>
                            <Image src={item.imgSrc[0]} alt="Product Image" width={1000} height={1000} style={{width:"100%"}}/>
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
                            <Link href="#" className="fz-single-product__title">{item.name}</Link>
                            <div className="fz-single-product__price-rating">
                                <p className="fz-single-product__price">
                                    <span className="current-price">&yen;{item.price.toLocaleString()}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default RelatedProductSection