import React from 'react'
import MidComponentItem from "./MidComponentItem"
import Midphone1 from "../../assets/images/MidComponentPhone.png"
import MidPhone2 from "../../assets/images/midPhone2.png";


export const MidComponentParent = () => {
  return (
    <div>
        <div>
        <MidComponentItem title='Dive into the Future'
         text="In a world where people constantly have phone in their hands, 
         the need for online opportunities is growing. We have a solution - fully digital access to 
         all information and services related to 
         the interior and design itself. Everything for a carefree stay in the palm of a hand."
         img={Midphone1}
         reverse
        />
        </div>

        <div>
        <MidComponentItem title="Search by room"
         img={MidPhone2}
        />
        </div>    
    </div>
  )
}
