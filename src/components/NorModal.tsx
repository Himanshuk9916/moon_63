import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {assets} from '../Assets';
import {colors} from '../constants/colors';
import {texts} from '../constants/text';
import alignment from '../utils/alignment';
import CommonModal from './CommonModal/CommonModal';

const NorModal = (props: any) => {
  const [checked, setChecked] = useState(0);

  const data = ['NOR', 'GOLDM', 'CURRENCY', 'ONE SCRIPT', 'TT', 'Default'];

  useEffect(() => {
  }, [checked]);

  return (
    <CommonModal visible={props.visible} onClose={props.onClose}>
      <View
        style={{
          ...alignment.row_alingC_SpaceB,
        }}>
        <Text style={styles.watchListText}>{texts.SELECT_WATCHLIST}</Text>
        <TouchableOpacity onPress={props.onClose}>
          <Image source={assets.cross} style={styles.img} />
        </TouchableOpacity>
      </View>
      {data.map((data, key) => (
        <View key={key} style={{padding: 15}}>
          {checked == key ? (
            <View style={styles.btn}>
              <TouchableOpacity style={{...alignment.row}}>
                <Image style={styles.img} source={assets.radio_checked} />
                <Text style={{color: colors.black}}>{data}</Text>
              </TouchableOpacity>
              <View style={{width: 50, ...alignment.row_SpaceB}}>
                <Image source={assets.delete} style={styles.img} />
                <Image source={assets.heart} style={styles.img} />
              </View>
            </View>
          ) : (
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => setChecked(key)}
                style={{...alignment.row}}>
                <Image style={styles.img} source={assets.radio_unchecked} />
                <Text style={{color: colors.black}}>{data}</Text>
              </TouchableOpacity>
              <View style={{width: 50, ...alignment.row_SpaceB}}>
                <Image source={assets.delete} style={styles.img} />
                <Image source={assets.heart} style={styles.img} />
              </View>
            </View>
          )}
        </View>
      ))}
      <TouchableOpacity style={{...alignment.row_alignC, paddingLeft: 15}}>
        <Image source={assets.cross} style={styles.img} />
        <Text style={styles.createWatchListText}>{texts.CREATE_WATCHLIST}</Text>
      </TouchableOpacity>
    </CommonModal>
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  commonTimingView: {
    height: 300,
    width: 120,
    alignItems: 'flex-start',
  },
  container: {
    backgroundColor: 'yellow',
  },
  img: {
    height: 20,
    width: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  watchListText: {
    fontSize: 30,
    color: colors.black,
  },
  createWatchListText: {
    paddingLeft: 30,
    fontSize: 20,
    color: colors.black,
  },
});

export default NorModal;
