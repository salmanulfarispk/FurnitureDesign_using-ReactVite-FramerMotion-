import React from 'react'
import { Link } from 'react-scroll'

export const MobileNavContainer = ({ setOpen, name, link }) => {
  return (
    <div>
      <div className='flex flex-col items-center py-2'>
        <Link>
          to={link}
          spy={true}
          smooth={true}
          hashSpy={true}
          offse={50}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
          onClick={() => setOpen(false)}
        </Link>
      </div>
    </div>
  )
}















