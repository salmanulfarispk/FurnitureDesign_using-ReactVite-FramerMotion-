import React from 'react'

const MidComponentItem = ({title ,img , text ,reverse}) => {
  return (
    <div id='company'>
      <div className='grid grid-cols-2 justify-items-center items-center'>
        <div className='w-4/5 pl-24'>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default MidComponentItem