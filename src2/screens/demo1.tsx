import React,{useContext,useEffect} from "react";
import {View,Text,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from "../context/appcontext";

function Demo1(){
    const navigation=useNavigation<any>()
    const {globaltheme,toggleTheme}=useContext(ThemeContext)
    console.log('DemoScreen1',globaltheme)
    console.log('Function',toggleTheme)

    const anyFunction=()=>{
        toggleTheme()
    }

    return(
        <View style={{backgroundColor:globaltheme.backgroundcolor,flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:globaltheme.textcolor}}>Demo Screen 1</Text>
            <Button title="Press" onPress={()=>navigation.navigate('Demo2')}/>
            <Button title="Toggle" onPress={()=>anyFunction()}/>
        </View>
    )
}

export default Demo1;