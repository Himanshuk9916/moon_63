import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import {colors} from '../constants/colors';
import {texts} from '../constants/text';

const TimingModal = (props: any) => {
  const index = ['','NSE', 'BSE', 'NDCEX', 'MCX', 'MCX-SX'];

  const marketTiming = [
    'MARKET TIMINGS',
    '9:15AM-15:30PM',
    '9:15AM-15:30PM',
    '9:15AM-15:30PM',
    '9:15AM-15:30PM',
    '9:15AM-15:30PM',
  ];

  const amoTiming = [
    'AMO TIMINGS',
    '00:00AM-00:00AM',
    '00:00AM-00:00AM',
    '00:00AM-00:00AM',
    '00:00AM-00:00AM',
    '00:00AM-00:00AM',
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
        <TouchableOpacity onPress={()=>props.onClose()} style={{alignItems:'flex-end'}}>
            <Image source={require('../Assets/cross.png')} style={{height:20,width:20}}/>
        </TouchableOpacity>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: colors.black}}>
          {texts.TIMINGS}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: 300, width: 60}}>
            {index.map(item => (
              <Text style={{color:'black',fontWeight:'bold',marginVertical:10}}>{item}</Text>
            ))}
          </View>
          <View
            style={styles.commonTimingView}>
            {marketTiming.map(item => (
              <Text style={{color:'black',marginVertical:10}}>{item}</Text>
            ))}
          </View>
          <View
            style={styles.commonTimingView}>
            {amoTiming.map(item => (
              <Text style={{color:'black',marginVertical:10}}>{item}</Text>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: 350,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical:10,
    borderRadius:10
  },
  commonTimingView:{
    height: 300,
    width: 120,
    alignItems: 'flex-start',
  }
});

export default TimingModal;
