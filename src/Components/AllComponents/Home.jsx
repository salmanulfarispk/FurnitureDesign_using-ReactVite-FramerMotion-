import React, { useContext, useRef } from 'react'
import Navbar from "../Navbar/Navbar"
import Header from '../Headers/Header'
import { WrapperContainer } from '../WrapperContainer/WrapperContainer'
import { MidFilterSection } from '../Midsection/MidFilterSection'
import { MidComponentParent } from '../Midsection/MidComponentParent'
import { TabComponent } from '../Midsection/TabComponent'
import { FurnitureFlow } from '../Midsection/FurnitureFlow'
import NewsLetter from '../Midsection/NewsLetter'
import { Cards } from '../Midsection/Card'
import Footer from '../Footer/Footer'
import { PopUpButton } from '../PopUpButton/PopUpButton'
import  { ThemeBgContext } from "../ContextWrapper/ThemeContext"
import MobileNav from "../Navbar/MobileNav"



function Home() {
  
  const sectionTop = useRef();
  const {theme}=useContext(ThemeBgContext)

  const handleScroll = () => {
    sectionTop.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='relative'>
    <MobileNav />
    <div>
      <PopUpButton handleScroll={handleScroll} />
    </div>
    <div className={theme === "light" ? "bg-white" : "bg-dark"}>
      <WrapperContainer navHead>
        <Navbar />
        <Header topRef={sectionTop} />
      </WrapperContainer>
    </div>
    <div className='bg-gray-100 w-full'>
      <WrapperContainer>
        <MidFilterSection />
        <MidComponentParent />
        <TabComponent />
        <FurnitureFlow />
        <Cards />
        <NewsLetter />
      </WrapperContainer>
      <div>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Home