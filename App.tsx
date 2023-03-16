import 'react-native-gesture-handler'
import React,{useState,useEffect} from "react";
import TabBar from "./src/navigationP/TabNavigation";
import StackNavigation from "./src2/navigation/stack";
import ThemeContext,{theme} from "./src2/context/appcontext";
import { Alert } from "react-native";
import Login from './src/screens/Login/Login';
import { lightTheme } from './src2/themes/light';
import { darkTheme } from './src2/themes/dark';
import Extra from './src2/screens/extra';

// function App(){
//   const [globaltheme,setGlobalTheme]=useState(lightTheme)

//   const toggleTheme=()=>{
//     if(globaltheme == lightTheme){
//       setGlobalTheme(darkTheme)
//     }else if(globaltheme == darkTheme){
//       setGlobalTheme(lightTheme)
//     }
//   }

//   return(
//     <ThemeContext.Provider value={{globaltheme,toggleTheme}}>
//     <StackNavigation />
//     </ThemeContext.Provider>
//   )
// }

function App(){
  
  return(
    // <TabBar />
    <Login />
  )
}

export default App;