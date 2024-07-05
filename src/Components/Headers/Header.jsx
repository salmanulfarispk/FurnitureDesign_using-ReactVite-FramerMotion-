import React, { useContext } from 'react'
import { Switch } from "@material-tailwind/react";
import header1 from "../../assets/images/headerImage.png"
import { motion } from 'framer-motion';
import  { ThemeBgContext } from "../ContextWrapper/ThemeContext"

function Header({topRef}) {

    const{theme,handleTheme}=useContext(ThemeBgContext)

    return (
      <div className='mx-auto pt-16' ref={topRef}>
      <div className='sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center'>
        {/* Left Section */}
        <div className='sm:w-full sm:pl-4 w-4/5 pl-24'>
          <Switch
            color="blue"
            label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
            defaultChecked={theme === "dark"}
            onClick={handleTheme}
          />
          <h1
            className={
              theme === "light"
                ? 'sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark'
                : 'sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white'
            }
          >
            AxeL Brand new{" "}
            <span
              className={
                theme === "light"
                  ? 'sm:text-4xl text-dark text-6xl font-petitFormal font-bold'
                  : 'sm:text-4xl text-white text-6xl font-petitFormal font-bold'
              }
            >
              Furniture
            </span>{" "}
            Mobile App
          </h1>
          <div className='mt-4'>
            <p
              className={
                theme === "light"
                  ? "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl"
                  : "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-white text-2xl"
              }
            >
              Giving your home a proper makeover never was this easy. Modern
              and stylish furniture for decent prices. Take a look at what we offer
              with a simple button click.
            </p>
          </div>
          <div className='pb-20'>
            <button className='pushable mt-4'>
              <span className='front'>Start now</span>
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className='sm:pl-4 mt-4'>
          <div>
            <h2
              className={
                theme === "light"
                  ? "sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                  : "sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
              }
            >
              Modern Design
            </h2>
          </div>
          <motion.img
            className='sm:h-[475px] h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl'
            src={header1}
            alt='header-phone'
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
    )
}

export default Header