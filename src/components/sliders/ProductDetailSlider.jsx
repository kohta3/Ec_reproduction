import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const ProductDetailSlider = (props) => {
  const product = props.product;
  const mainImageRef = useRef(null);
  useEffect(() => {
    // Set the asNavFor property after the mainImageRef is initialized
    const imgNavSettings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: mainImageRef.current,
      dots: false,
      infinite: true, 
    };
    // Initialize the slider with the updated settings
    setImgNavSettings(imgNavSettings);
  }, []);

  const [imgNavSettings, setImgNavSettings] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: null, // Initialize with null
    dots: false,
    focusOnSelect: true,
  });

  const imgSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <>
      <Slider className="fz-product-details__img-slider" {...imgSliderSettings} ref={mainImageRef}>
        {!product?(
          <Image src="/assets/images/loading.png" alt="Product Image" width={1000} height={500} />):(
        product.imgSrc.map((img,index)=>(
          <Image key={index} src={img} alt="Product Image" className='mainThumbnail' width={1000} height={500}/>)
        ))}
        
      </Slider>

      <Slider className="fz-product-details__img-nav" {...imgNavSettings}>
        {!product?(
            <Image src="/assets/images/loading.png" alt="Product Image" width={1000} height={500}/>):(
          product.imgSrc.map((img,index)=>(
            <Image key={index} src={img} alt="Product Image" className='subThumbnail' width={1000} height={500}/>)
          ))}
      </Slider>
    </>
  );
};

export default ProductDetailSlider;
