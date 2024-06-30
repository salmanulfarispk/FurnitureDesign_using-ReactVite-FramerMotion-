import React from 'react'

export const MidButton = ({buttons, filter, selected}) => {
  return (
    <div className='flex items-center pt-8'>
         {buttons.map((btn)=>{
            return(
                <button key={btn.id} className={selected === btn.id ? 'pushable mr-4': 'pushable mr-4'} onClick={()=> filter(btn.id)}>
                    <span className={selected === btn.id ? "front2" : "front" }>
                      {btn.name}
                    </span>
                </button>
            );
         })}
    </div>
  )
}
