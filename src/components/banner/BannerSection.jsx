import React, { useContext, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FarzaaContext } from '../../context/FarzaaContext';
import { firstBannerData } from '../../data/Data';
import Image from 'next/image';

const BannerSection = () => {
    const {handleVideoShow} = useContext(FarzaaContext)
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
    }
  return (
    <section className="fz-1-banner-section">
                <div className='row justify-content-center'>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        className="fz-1-banner-slider owl-carousel col-md-8"
                        autoplay={{ delay: 3000 }}
                        navigation={{
                            prevEl: 'owl-prev',
                            nextEl: 'owl-next',
                        }}
                        modules={[Navigation, Autoplay]}
                        style={{marginLeft:0,marginRight:0}}
                    >
                        {firstBannerData.map((item)=>(
                            <SwiperSlide className="fz-1-banner-single-slide" key={item.id}>
                                <Image src={item.imgSrc} alt="Sticker" width={1000} height={1000} />

                            </SwiperSlide> 
                        ))}           
                        <div className="owl-nav">
                            <button type="button" role="presentation" className="owl-prev" onClick={goPrev}>
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button type="button" role="presentation" className="owl-next" onClick={goNext}>
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </Swiper>
                    <div className='col-md-3 bannerRight' style={{position:"relative"}}>
                        <Image src="/assets/images/header-side.png" alt="bunnerRightImage" sizes='100vw' fill style={{ maxHeight: '100%'}}/>
                    </div>
                </div>
        </section>
  )
}

export default BannerSection