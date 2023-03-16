import React from 'react';
import { FlatList } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {assets} from '../../Assets';
import {colors} from '../../constants/colors';
import {texts} from '../../constants/text';
import alignment from '../../utils/alignment';
import CommonModal from '../CommonModal/CommonModal';

const TimingModal = (props: any) => {

  const data=[
    {
      index:'NSE',
      marketTiming:'9:15AM-15:30PM',
      amoTiming:'00:00AM-00:00AM',
    },
    {
      index:'BSE',
      marketTiming:'9:15AM-15:30PM',
      amoTiming:'00:00AM-00:00AM',
    },
    {
      index:'NDCEX',
      marketTiming:'9:15AM-15:30PM',
      amoTiming:'00:00AM-00:00AM',
    },
    {
      index:'MCX',
      marketTiming:'9:15AM-15:30PM',
      amoTiming:'00:00AM-00:00AM',
    },
    {
      index:'MCX-SX',
      marketTiming:'9:15AM-15:30PM',
      amoTiming:'00:00AM-00:00AM',
    },
  ]

  const renderTiming=({item}:any)=>{
    return(
      <View style={{...alignment.row,justifyContent:'space-evenly'}}>
        <Text style={styles.indexText}>{item.index}</Text>
        <Text style={styles.market_amo_Text}>{item.marketTiming}</Text>
        <Text style={styles.market_amo_Text}>{item.amoTiming}</Text>
      </View>
    )
  }
  return (
    <CommonModal visible={props.visible} onClose={props.onClose}>
      <TouchableOpacity
        onPress={() => props.onClose()}
        style={{alignItems: 'flex-end'}}>
        <Image source={assets.cross} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.timingText}>{texts.TIMINGS}</Text>
      <FlatList 
      data={data}
      renderItem={renderTiming}
      />
    </CommonModal>
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
    paddingLeft:20
  },
});

export default TimingModal;
