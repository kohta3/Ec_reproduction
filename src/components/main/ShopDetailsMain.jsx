import React, { useState ,useContext } from 'react';
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ProductDetailSection from '../product/ProductDetailSection'
import RelatedProductSection from '../product/RelatedProductSection'
import HeadSection from "../commonMeta/HeadSection";
import { useRouter } from 'next/router';
import { FarzaaContext } from '../../context/FarzaaContext';


const ShopDetailsMain = () => {
  const [currents, setItems] = useState([
    { label: "商品一覧", url: "/shop" },
    { label: "商品詳細", url: "./" }
  ]);

  const router = useRouter();
  const { pid } = router.query;

  const { paginatedProducts } = useContext(FarzaaContext);
  const product = paginatedProducts.find(({id}) => id === parseInt(pid,10));

  return (
    <>
      <HeadSection title={product.name?product.name:null} />
      <BreadcrumbSection title={"Shop Details"} current={currents}/>
      <ProductDetailSection product = {product} />
      <RelatedProductSection/>
    </>
  )
}

export default ShopDetailsMain