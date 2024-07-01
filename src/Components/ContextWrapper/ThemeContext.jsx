import React, { createContext, useEffect, useState } from 'react'


export const ThemeBgContext=createContext()

export const ThemeContext = ({children}) => {

  const storedTheme= JSON.parse(localStorage.getItem("theme"))

  const[theme,setTheme]=useState(storedTheme)

    useEffect(()=>{
      localStorage.setItem("theme",JSON.stringify(theme))
    },[theme])

    const handleTheme=()=>{
        if(storedTheme){
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }else{
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        }
    }

    const state={
        theme: theme,
        handleTheme: handleTheme
    }

  return (
    <div>
        <ThemeBgContext.Provider value={state}>
            {children}
        </ThemeBgContext.Provider>
    </div>
  )
}
