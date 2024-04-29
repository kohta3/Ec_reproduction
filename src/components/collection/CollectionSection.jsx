import React, { useContext, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Nav } from 'react-bootstrap';
import { FarzaaContext } from '../../context/FarzaaContext';
import Link from 'next/link';

const CollectionSection = () => {
    const {addToCart,addToWishlist,paginatedProducts,slides} = useContext(FarzaaContext)
    const [activeTab, setActiveTab] = useState('all');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const swiperRef = useRef(null);

    const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
    }
    };

    const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
    }
    };
    
    const filteredItemList =
    activeTab === 'all'
      ? paginatedProducts
      : paginatedProducts.filter((item) => item.category === activeTab);
  return (
    <section className="fz-1-latest-collection">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">Latest Collection <span className='fz-section-sub-title'>新着商品</span></h2>
            </div>

            <Swiper
                slidesPerView={slides}
                className="fz-1-products-container"
                navigation={{
                    prevEl: '.product-prev',
                    nextEl: '.product-next',
                }}
                modules={[Navigation]}
            >
                {
                    filteredItemList.slice(0,5).map((item)=>(
                        <SwiperSlide className="fz-1-single-product wood-door" key={item.id}>
                            <div className="fz-single-product__img">
                                <img src={item.imgSrc[0]} alt="Product Image"/>
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
                                <Link href="/shopDetails" className="fz-single-product__title">{item.name}</Link>
                                <p className="fz-single-product__price">
                                    <span className="current-price">&yen;{item.price.toLocaleString()}</span>
                                </p>
                            </div>
                        </SwiperSlide> 
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default CollectionSection