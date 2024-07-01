import React from 'react'
import Navbar from "../Navbar/Navbar"
import Header from '../Headers/Header'
import { WrapperContainer } from '../WrapperContainer/WrapperContainer'
import { MidFilterSection } from '../Midsection/MidFilterSection'
import { MidComponentParent } from '../Midsection/MidComponentParent'
import { TabComponent } from '../Midsection/TabComponent'
import { FurnitureFlow } from '../Midsection/FurnitureFlow'
import NewsLetter from '../Midsection/NewsLetter'


function Home() {
  return (
    <div>
      <div>

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
          <NewsLetter/>
         </WrapperContainer>
      </div>


      </div>
    </div>
  )
}

export default Home