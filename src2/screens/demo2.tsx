import React from "react";
import {View,Text,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Demo2(){
    const navigation=useNavigation<any>()
    return(
        <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black'}}>Demo Screen 2</Text>
            <Button title="Press" onPress={()=>navigation.navigate('Demo3')}/>
        </View>
    )
}

export default Demo2;