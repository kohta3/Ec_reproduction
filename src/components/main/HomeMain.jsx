import React from 'react'
import BannerSection from '../banner/BannerSection'
import CategorySection from '../category/CategorySection'
import CollectionSection from '../collection/CollectionSection'
import OfferSection from '../offer/OfferSection'
import HeadSection from "../commonMeta/HeadSection";

const DoorShopMain = () => {
  return (
    <main>
        <HeadSection />
        <BannerSection/>
        <CategorySection/>
        <CollectionSection/>
        {/* <SubscriptionSection/> */}
        {/* <FeaturedProducts/> */}
        {/* <FeaturedSection/> */}
        <OfferSection/>
        {/* <ModernDoorSection/> */}
        {/* <BlogSection/> */}
        {/* <BrandSection/> */}
        {/* <GallerySection/> */}
    </main>
  )
}

export default DoorShopMain