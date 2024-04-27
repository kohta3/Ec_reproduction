import React, { useState } from 'react';
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ProductDetailSection from '../product/ProductDetailSection'
import RelatedProductSection from '../product/RelatedProductSection'

const ShopDetailsMain = () => {
  const [currents, setItems] = useState([
    { label: "商品一覧", url: "/shop" },
    { label: "商品詳細", url: "./" }
  ]);


  return (
    <>
      <BreadcrumbSection title={"Shop Details"} current={currents}/>
      <ProductDetailSection/>
      <RelatedProductSection/>
    </>
  )
}

export default ShopDetailsMain