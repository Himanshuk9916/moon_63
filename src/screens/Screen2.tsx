import {View, Text, FlatList, Button} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useEffect, useLayoutEffect, useRef, useState} from 'react';

function Screen2() {
    // const ref=useRef(0)

    // useEffect(()=>{
    //     const timer=setInterval(()=>{
    //         ref.current=ref.current+1
    //     },1000)
    // })

    useIsFocused()

const data = [
    {
      name: setInterval(() => {
        return Math.floor(Math.random() * 99);
      }, 1000),
      data: setInterval(() => {
        return Math.floor(Math.random() * 99);
      }, 1000),
    },
    {
      name: setInterval(() => {
        return Math.floor(Math.random() * 99);
      }, 1000),
      data: setInterval(() => {
        return Math.floor(Math.random() * 99);
      }, 1000),
    },
  ];


  return (
    <View style={{flex: 1}}>
      <Text>Hello</Text>
      <FlatList
      refreshing={true}
        data={data}
        renderItem={({item,index}) => (
            <>
            {console.log(item,index)}
          <View>
            <Text>{item.data}</Text>
          </View>
          </>
        )}
      />
    </View>
  );
}

export default Screen2;
