import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { assets } from '../Assets';
import {colors} from '../constants/colors';
import { texts } from '../constants/text';
import alignment from '../utils/alignment';

function TrendModal(props: any) {
  const data = [
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
        <View style={{...alignment.row_alingC_SpaceB}}>
        <Text style={{fontSize:30,color:colors.black}}>{texts.DONT_MISS}</Text>
        <TouchableOpacity onPress={()=>props.onClose()}>
      <Image source={assets.cross} style={styles.image}/>
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
                style={styles.tradeText}>
                {texts.TRADE}
              </Text>
              <Text style={styles.companyNameText}>
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
  },
  tradeText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 10,
  },
  image:{
    height:25,width:25
  },
  companyNameText:{
    fontSize: 17, fontWeight: 'bold', color: colors.black
  }
});

export default TrendModal;
