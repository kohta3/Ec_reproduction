import React from 'react'
import HeaderSection from '../components/header/HeaderSection'
import FooterSection from '../components/footer/FooterSection'
import DoorShopMain from '../components/main/homeMain'
import RightSideBar from '../components/sidebar/RightSideBar'

const HomePage1 = () => {
  return (
    <div className="fz-1-body">
      <HeaderSection/>
      <DoorShopMain/>
      <RightSideBar/>
      <FooterSection/>
    </div>
  )
}

export default HomePage1