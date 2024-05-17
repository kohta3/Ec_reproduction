import React, { useState } from 'react';
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ShopAreaSection from '../shop/ShopAreaSection'
import HeadSection from "../commonMeta/HeadSection";

const ShopMain = () => {
  const [currents, setItems] = useState([{label:"商品一覧",url:"./"}]);

  return (
    <>
      <HeadSection title="商品一覧" />
      <BreadcrumbSection title={"Shop Page"} current={currents}/>
      <ShopAreaSection/>
    </>
  )
}

export default ShopMain