import React, { createContext, useRef, useState } from "react";
import { Animated } from "react-native";
import { lightTheme, darkTheme } from "./theme";
''
export const ThemeContext = createContext({} as any);

export const ThemeProvider = ({children }: any ) => {
        // temos que declara o stado que se encontra que e o claro thema 
        const [dark, setDark] = useState(false); // aqui declamos que ele e false pq o dark e so true quando a lua aparace 
    
        const toggleTheme = () =>{    
          setDark((prev) => !prev) // fica obsertando e muda de estado 
        };

        const theme = dark ? darkTheme : lightTheme;

        return(
            <ThemeContext.Provider
                value={{theme, dark, toggleTheme}} 
            >
                {children}
            </ThemeContext.Provider>
        )
}