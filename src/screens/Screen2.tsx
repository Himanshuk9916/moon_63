import {View, Text, FlatList, Button} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';

function Screen2() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setToggle(!toggle);
    }, 1000);

    console.log(toggle);

    return () => clearInterval(timer);
  }, [toggle]);

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
        extraData={toggle}
        data={data}
        renderItem={({item}) => (
          <>
            {console.log(item)}
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
