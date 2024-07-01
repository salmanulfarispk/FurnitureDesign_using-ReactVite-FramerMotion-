import React, { createContext } from 'react'





export const ThemeBgContext=createContext()

export const ThemeContext = ({children}) => {
  return (
    <div>
        <ThemeContext>
            {children}
        </ThemeContext>
    </div>
  )
}
