import React, { useContext } from 'react'
import flowlight from "../../assets/images/flow-light.png"
import flowDark from "../../assets/images/flow-dark.png"
import { ThemeBgContext } from '../ContextWrapper/ThemeContext'

export const FurnitureFlow = () => {

   const {theme}=useContext(ThemeBgContext)

  return (
    <div>
        <img src={theme === "light" ? flowlight : flowDark}
        className="bg-center bg-no-repeat bg-cover h-full w-full"
         alt='furniture-flow'
        />

    </div>
  )
}
