import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {assets} from '../Assets';
import {colors} from '../constants/colors';
import {texts} from '../constants/text';
import alignment from '../utils/alignment';

const TimingModal = (props: any) => {
  const index = ['', 'NSE', 'BSE', 'NDCEX', 'MCX', 'MCX-SX'];

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
        <TouchableOpacity
          onPress={() => props.onClose()}
          style={{alignItems: 'flex-end'}}>
          <Image source={assets.cross} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.timingText}>{texts.TIMINGS}</Text>
        <View style={{...alignment.row_SpaceB}}>
          <View style={{height: 300, width: 60}}>
            {index.map(item => (
              <Text style={styles.indexText}>{item}</Text>
            ))}
          </View>
          <View style={styles.commonTimingView}>
            {marketTiming.map(item => (
              <Text style={styles.market_amo_Text}>{item}</Text>
            ))}
          </View>
          <View style={styles.commonTimingView}>
            {amoTiming.map(item => (
              <Text style={styles.market_amo_Text}>{item}</Text>
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
    paddingVertical: 10,
    borderRadius: 10,
  },
  commonTimingView: {
    height: 300,
    width: 120,
    alignItems: 'flex-start',
  },
  image: {
    height: 20,
    width: 20,
  },
  indexText: {
    color: colors.black,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  timingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
  },
  market_amo_Text: {
    color: colors.black,
    marginVertical: 10,
  },
});

export default TimingModal;
