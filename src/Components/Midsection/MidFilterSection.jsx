import React, { useEffect, useState } from 'react'
import { MidButton } from './MidButton'
import { sliderData } from '../../DatasForPages/Dummydatas'

export const MidFilterSection = () => {

    const buttons=[
    {
      id: "1",
      name:"Room1"
    },
    {
        id: "2",
        name:"Room2"
      },
      {
        id: "3",
        name:"Room3"
      },

]

    const [selected,setSelected]=useState("1")
    const [click,setClick]=useState(false)
    const [data,setData]=useState([])


      const filterData=(buttonid)=>{
           const filter= sliderData.filter((item)=>(
            item.id === buttonid
           ));

           setData(filter)
           setClick(true)
           setSelected(buttonid)
      }

    useEffect(()=>{
        const putData=(data)=>{
          setData(data.filter((item)=> item.id === "1"))
        }

        putData(sliderData)
    },[])

  return (
    <div className='mx-auto pt-72 pb-56'id="news">
        <div className='grid grid-cols-2 justify-items-center items-center'>

           <div className='w-4/5 mx-auto pl-24'>
                <h2 className='w-96 text-5xl font-bold font-inter no-underline align-middle 
                tracking-wide normal-case leading-none text-dark'>check out some of the news
                </h2>
               
               <MidButton buttons={buttons} filter={filterData} selected={selected}/>

           </div>


        </div>
    </div>
  )
}
