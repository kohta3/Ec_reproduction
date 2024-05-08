import React from 'react'
import BannerSection from '../banner/BannerSection'
import CategorySection from '../category/CategorySection'
import CollectionSection from '../collection/CollectionSection'
import HeadSection from "../commonMeta/HeadSection";
import FeaturedProducts from "../featured/FeaturedProducts"

const DoorShopMain = () => {
  return (
    <main>
        <HeadSection />
        <BannerSection/>
        <CategorySection/>
        <CollectionSection/>
        <FeaturedProducts/>
        {/* <FeaturedSection/> */}
    </main>
  )
}

export default DoorShopMain