import { createContext,useContext } from "react"

export const Themecontext = createContext({
    theameMode:"light",
    DarkMode:()=>{},
    LightMode:()=>{}

    })
    
export const ThemeProvider=Themecontext.Provider

export default function useTheme(){
     return useContext(Themecontext)
}
