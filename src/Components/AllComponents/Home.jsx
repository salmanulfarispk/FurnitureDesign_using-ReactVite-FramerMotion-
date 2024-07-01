import React, { useRef } from 'react'
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


function Home() {

  return (
    <div className='relative'>

     <div className='fixed  right-4 bottom-2 z-20'>
        <PopUpButton />
     </div>

      <div className='bg-white'>
        <WrapperContainer navHead>
      <Navbar/>
      <Header/>
      </WrapperContainer>
      <div className='bg-gray-100 w-full'>
         <WrapperContainer>
          <MidFilterSection/>
          <MidComponentParent/>
          <TabComponent/>
          <FurnitureFlow/>
          <Cards/>
          <NewsLetter/>
         </WrapperContainer>
      </div>
      <div>
        <Footer/>
      </div>


      </div>
    </div>
  )
}

export default Home