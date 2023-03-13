import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {colors} from '../constants/colors';
import {texts} from '../constants/text';

const TimingModal = (props: any) => {
  const timingsData = [
    {
      index: 'NSE',
      marketTiming: '9:00AM-15:30PM',
      amoTiming: '00:00AM-00:00AM',
    },
    {
      index: 'BSE',
      marketTiming: '9:00AM-15:30PM',
      amoTiming: '00:00AM-00:00AM',
    },
    {
      index: 'NDCEX',
      marketTiming: '9:00AM-15:30PM',
      amoTiming: '00:00AM-00:00AM',
    },
    {
      index: 'MCX',
      marketTiming: '9:00AM-15:30PM',
      amoTiming: '00:00AM-00:00AM',
    },
    {
      index: 'MCX-SX',
      marketTiming: '9:00AM-15:30PM',
      amoTiming: '00:00AM-00:00AM',
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
        <Text style={{fontSize: 30, fontWeight: 'bold', color: colors.black}}>
          {texts.TIMINGS}
        </Text>
        <FlatList
          data={timingsData}
          renderItem={({item}) => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text>{item.index}</Text>
              <Text>{item.marketTiming}</Text>
              <Text>{item.amoTiming}</Text>
            </View>
          )}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: 300,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderWidth: 1,
  },
});

export default TimingModal;
