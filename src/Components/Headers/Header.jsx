import React from 'react'
import { Switch } from "@material-tailwind/react";

function Header() {
  return (
    <div className='mx-auto pt-16'>
        <div className='grid grid-cols-2 justify-items-center items-center'>

            <div className='w-4/5 pl-2'>
              <Switch color="blue" defaultChecked /> 
              <h1 className='text-4xl font-serif font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark'>
                 Axel Brand new {" "}<span className='text-dark text-5xl font-petitFormal font-bold'>Furniture</span>{" "}Mobile App
                 </h1>
                 <div className='mt-4'>
                     <p className='4/5  font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl'>Giving your home a propper makeover never was this easy. Modern
                        and stylish furniture for decent prices. Take a look what we offer
                        with simple button click.
                     </p>
                </div>
                 <div className='pb-20'>
                    <button className='pushable mt-4'>
                        <span className='front'>start now</span>
                    </button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Header