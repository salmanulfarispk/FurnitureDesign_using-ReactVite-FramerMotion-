import React, { useContext, useEffect, useState } from 'react'
import logo from "../../assets/images/logo.svg"
import { navbarData } from "../../DatasForPages/Dummydatas"
import { Link } from 'react-scroll'
import  { ThemeBgContext } from "../ContextWrapper/ThemeContext"


export default function Navbar() {
 
  const [scroll,setScroll]=useState(false)

  const {theme}=useContext(ThemeBgContext)

  const handleScroll=()=>{
    if(window.scrollY > 50){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  useEffect(()=>{
      window.addEventListener("scroll",handleScroll)

      return ()=>{
        window.removeEventListener("scroll",handleScroll)
      }
      
  },[scroll])

  return (
    <div>
    <div
      className={
        scroll
          ? "sm:hidden h-16 w-full fixed flex items-center transition ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20"
          : "sm:hidden bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20"
      }
    >
      <div className='grid grid-cols-2 justify-items-center items-center content-center w-full'>
        <div className='pl-20 w-4/5'>
          <img className='h-10' src={logo} alt='logo-img' />
        </div>
        <div className='flex flex-row items-center w-full'>
          {navbarData.map((item) => (
            <div key={item.id}>
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                className={
                  theme === "light"
                    ? "cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                    : "cursor-pointer text-white font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                }
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
