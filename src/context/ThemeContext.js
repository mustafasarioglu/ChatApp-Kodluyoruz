import React from "react"


export const themes = {
    dark: {
        color: "white",
        backGround: "black",
    },
    light:{
        color: "black",
        backGround: "white"
    }
};


const ThemeContext = React.createContext(themes.dark);

export default ThemeContext