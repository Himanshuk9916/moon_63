import React,{useState,useEffect} from "react";
import TabBar from "./src/navigationP/TabNavigation";
import StackNavigation from "./src2/navigation/stack";
import ThemeContext,{theme} from "./src2/context/appcontext";

function App(){
  const [globaltheme,setGlobalTheme]=useState(theme.light)

  const toggleTheme=()=>{
    if(globaltheme == theme.dark){
      setGlobalTheme(theme.light)
    }else if(globaltheme == theme.light){
      setGlobalTheme(theme.dark)
    }
  }

  return(
    <ThemeContext.Provider value={{globaltheme,toggleTheme}}>
    <StackNavigation />
    </ThemeContext.Provider>
  )
}

export default App;