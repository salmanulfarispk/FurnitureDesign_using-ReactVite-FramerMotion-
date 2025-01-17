import React, { useContext, useEffect, useState } from 'react'
import { MidButton } from './MidButton'
import { sliderData } from '../../DatasForPages/Dummydatas'
import { MidChild } from './MidChild'
import { motion } from 'framer-motion'
import { ThemeBgContext } from "../ContextWrapper/ThemeContext"

export const MidFilterSection = () => {

  const {theme}=useContext(ThemeBgContext)

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
        <div className='sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center'>

           <motion.div 
           className='sm:pt-10 sm:w-full sm:pl-4 w-4/5 mx-auto pl-24'
            initial="hidden"
            whileInView="visible"
            viewport={{once : true}}   //animation only occurs once when the element enters the viewport,not for re-enters into viewport
            transition={{duration: 1.5 }}
            variants={{
                visible: {opacity:1 ,scale:1},
                hidden: {opacity:0 ,scale: 0}
            }}
           >
                <h2 className={
                  theme === "light" ?
                'sm:text-3xl sm:w-full w-96 text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark':
                'sm:text-3xl sm:w-full w-96 text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white'
                }
                >check out some of the news
                </h2>
               
               <MidButton buttons={buttons} filter={filterData} selected={selected}/>

           </motion.div>

           <div className='ml-20 pb-4 relative mx-auto w-8/12 rounded-xl drop-shadow-2xl'>
             <MidChild data={data} click={click}/>
           </div>


        </div>
    </div>
  )
}
