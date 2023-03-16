import BottomSheet from '../components/BottomSheet';
import {View, Text, FlatList} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function ExtraTwo() {

    useIsFocused()
  const data = [
    {
      name: setInterval(() => {
        return Math.floor(Math.random() * 99);
      },1000),
      data: setInterval(() => {
        return Math.floor(Math.random() * 99);
      },1000),
    },
    {
      name: setInterval(() => {
        return Math.floor(Math.random() * 99);
      },1000),
      data: setInterval(() => {
        return Math.floor(Math.random() * 99);
      },1000),
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Text>Hello</Text>
      <FlatList 
      data={data}
      renderItem={(({item})=>(
        <View>
            <Text>{item.name}</Text>
        </View>
      ))}
      />
    </View>
  );
}

export default ExtraTwo;
