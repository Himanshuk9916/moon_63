import React,{useContext} from "react";
import {View,Text} from 'react-native';
import ThemeContext from "../context/appcontext";

function Demo3(){

    const {globaltheme,toggleTheme}=useContext(ThemeContext)
    console.log('DemoScreen3',globaltheme)
    return(
        <View style={{backgroundColor:globaltheme.backgroundcolor,flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:globaltheme.textcolor}}>Demo Screen 3</Text>
        </View>
    )
}

export default Demo3;