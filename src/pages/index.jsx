import { Inter } from "next/font/google";
import React from 'react'
import HeaderSection from '../components/header/HeaderSection'
import FooterSection from '../components/footer/FooterSection'
import DoorShopMain from '../components/main/DoorShopMain'
import RightSideBar from '../components/sidebar/RightSideBar'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="fz-1-body">
      <HeaderSection/>
      <DoorShopMain/>
      <RightSideBar/>
      <FooterSection/>
    </div>
  );
}
