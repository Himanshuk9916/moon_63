import React, { useCallback, useRef } from 'react';
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from '../components/BottomSheet';

function Extra() {
const ref=useRef<BottomSheetRefProps>(null)

    const onPress=useCallback(()=>{
        ref?.current?.scrollTo(-200)
    },[])

    const onReturn=(value:any)=>{
        console.log(value)
    }
  return (
    <GestureHandlerRootView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}/>
      <BottomSheet ref={ref} onReturn={onReturn}>
        <Text>Hello</Text>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#111',
        alignItems:"center",
        justifyContent:"center"
    },
    button:{
        height:50,
        borderRadius:25,
        opacity:0.6,
        aspectRatio:1,
        backgroundColor:'white'
    }
})

export default Extra;
