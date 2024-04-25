import React, { useState } from 'react';
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ShopAreaSection from '../shop/ShopAreaSection'

const ShopMain = () => {
  const [currents, setItems] = useState([{label:"商品一覧",url:"./"}]);

  return (
    <>
        <BreadcrumbSection title={"Shop Page"} current={currents}/>
        <ShopAreaSection/>
    </>
  )
}

export default ShopMain