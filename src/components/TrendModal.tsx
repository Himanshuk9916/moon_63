import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../constants/colors';

function TrendModal(props: any) {
  const data = [
    {
      companyName: 'TECHM',
      value: '1100.00(-2.00%)',
      text: 'SomeText',
    },
    {
      companyName: 'SBEn',
      value: '1100.00(-2.00%)',
      text: 'SomeText',
    },
    {
      companyName: 'TECHM',
      value: '1100.00(-2.00%)',
      text: 'SomeText',
    },
    {
      companyName: 'TECHM',
      value: '1100.00(-2.00%)',
      text: 'SomeText',
    },
    {
      companyName: 'TECHM',
      value: '1100.00(-2.00%)',
      text: 'SomeText',
    },
    {
      companyName: 'TECHM',
      value: '1100.00(-2.00%)',
      text: 'SomeText',
    },
  ];
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      transparent={true}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View style={styles.modalView}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
        <Text style={{fontSize:30,color:colors.black}}>Dont Miss</Text>
        <TouchableOpacity onPress={()=>props.onClose()}>
      <Image source={require('../Assets/cross.png')} style={{height:25,width:25}}/>
      </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({item}) => (
            <View
              style={styles.itemBox}>
              <View style={styles.notificationView}></View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  marginBottom: 10,
                }}>
                TRADE
              </Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                {item.companyName}
              </Text>
              <Text>{item.value}</Text>
              <Text style={{color: colors.bright_green}}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: 450,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  commonTimingView: {
    height: 300,
    width: 120,
    alignItems: 'flex-start',
  },
  notificationView: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    backgroundColor: 'orange',
    alignSelf:'flex-end',
    marginRight:20
  },
  itemBox:{
    height: 150,
    width: 150,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingHorizontal:10
    ,marginTop:20
  }
});

export default TrendModal;
