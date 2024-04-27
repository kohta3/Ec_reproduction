import React from 'react'
import Layout from '../../components/layout/Layout'
import ShopDetailsMain from '../../components/main/ShopDetailsMain'
import { useRouter } from 'next/router';

const ShopDetails = () => {
  return (
    <Layout>
        <ShopDetailsMain/>
    </Layout> 
  )
}

export default ShopDetails