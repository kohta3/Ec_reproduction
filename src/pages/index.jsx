import { Inter } from "next/font/google";
import React from 'react'
import HeaderSection from '../components/header/HeaderSection'
import FooterSection from '../components/footer/FooterSection'
import HomeMain from '../components/main/HomeMain'
import RightSideBar from '../components/sidebar/RightSideBar'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="fz-1-body">
      <HeaderSection/>
      <HomeMain/>
      <RightSideBar/>
      <FooterSection/>
    </div>
  );
}
