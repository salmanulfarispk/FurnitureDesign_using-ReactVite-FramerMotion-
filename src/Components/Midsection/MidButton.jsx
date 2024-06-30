import React from 'react'

export const MidButton = ({buttons, filter, selected}) => {
  return (
    <div>
         {buttons.map((btn)=>{
            return(
                <button key={btn.id} className={selected && 'pushable mt-16 ms-2'} onClick={()=> filter(btn.id)}>
                    <span className='front'>{btn.name}</span>
                </button>
            );
         })}
    </div>
  )
}
