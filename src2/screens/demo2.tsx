import React,{useContext} from "react";
import {View,Text,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from "../context/appcontext";

function Demo2(){
    const navigation=useNavigation<any>()

       const {globaltheme,toggleTheme}=useContext(ThemeContext)
    console.log('DemoScreen2',globaltheme)
    return(
        <View style={{backgroundColor:globaltheme.backgroundcolor,flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:globaltheme.textcolor}}>Demo Screen 2</Text>
            <Button title="Press" onPress={()=>navigation.navigate('Demo3')}/>
        </View>
    )
}

export default Demo2;