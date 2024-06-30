import React from 'react'

const MidComponentItem = ({title ,img , text ,reverse}) => {
  return (
    <div id='company'>
      {reverse ? (
         <div className='grid grid-cols-2 justify-items-center items-center'>

         <div className='w-4/5 pl-24'>
           <h2 className='text-4xl pt-10 pb-4 font-bold font-inter no-underline normal-case 
           align-middle tracking-wide leading-none text-dark'>{title}</h2>
           <p className='text-2xl w-full pb-4 font-normal font-inter no-underline align-middle
            tracking-wide normal-case leading-none text-dark'>{text}</p>
           <button className='pushable mt-4'>
             <span className='front'>Start Now</span>
           </button>
         </div>
           
           <div>
              <img src={img} alt='phone1' className='h-[675px] pt-1 hover:rotate-6 duration-1000 cursor-pointer'/>
           </div>
 
       </div>
      )  : (

        <div id='room' className='flex flex-row-reverse justify-around items-center w-full'>
              
              <div className='pb-4'>
                  <h2 className='text-4xl pt-10 pb-4 font-bold font-inter no-underline align-middle
                   tracking-wide normal-case leading-none text-dark'>{title}</h2>
              </div>

        </div>

      )}
      
    </div>
  )
}

export default MidComponentItem