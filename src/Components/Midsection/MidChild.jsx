import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeBgContext } from "../ContextWrapper/ThemeContext"

export const MidChild = ({data,click}) => {

  const {theme}=useContext(ThemeBgContext)

  return (
    <div>
      <div>
     {data.map((item)=>(
        <motion.div key={item.id} className='relative flex flex-col z-10'
         initial={{scale: 0.8, opacity: 0}}
         animate={{
            y: click ? 20 : 0,
            x: click ? 20 : 0,
            opacity: 1,
        }}
        exit={{scale: 0.8,opacity: 0}}
        transition={{type: "spring", duration: 1.5}}
        
        >
           <div className='w-[500px]'>
             <h3 className={
              theme === "light" ?
             'font-bold text-6xl font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark pb-4':
             'font-bold text-6xl font-inter no-underline align-middle tracking-wide normal-case leading-none text-white pb-4'

             }>
              {item.title}</h3>
           </div>
            <div className='flex flex-row justify-between items-center w-full'>
               <div>
                <p className={
                   theme === "light" ?
                  'text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark':
                  'text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white'
                   
                }>
                {item.text}</p>
               </div>
               <div className='absolute right-0 -z-10'>
                 <motion.img src={item.img} alt={item.title}
                  className='w-full'
                  initial={{height: 0, opacity: 0}}
                  animate={{
                    height: click ? "525px" : "525px",
                    opacity:1
                   }}
                   transition={{type: "tween",duration: 3}}
                 ></motion.img>
               </div>
           </div>
        </motion.div>
     ))}
     </div>
    </div>
  )
}
