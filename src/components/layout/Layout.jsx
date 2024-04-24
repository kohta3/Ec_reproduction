import React from 'react'
import HeaderSection from '../header/HeaderSection'
import FooterSection from '../footer/FooterSection'
import RightSideBar from '../sidebar/RightSideBar'

const Layout = ({children}) => {
  return (
    <>
        <HeaderSection/>
        {children}
        <RightSideBar/>
        <FooterSection/>
    </>
  )
}

export default Layout