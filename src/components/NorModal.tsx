import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../constants/colors';
import {texts} from '../constants/text';
import alignment from '../utils/alignment';

const NorModal = (props: any) => {
  const [checked, setChecked] = useState(0);

  const data = ['NOR', 'GOLDM', 'CURRENCY', 'ONE SCRIPT', 'TT', 'Default'];

  useEffect(() => {
    console.log('Checked', checked);
  }, [checked]);

  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      transparent={true}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View style={styles.modalView}>
        <View
          style={{
            ...alignment.row,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.watchListText}>{texts.SELECT_WATCHLIST}</Text>
          <TouchableOpacity onPress={props.onClose}>
          <Image source={require('../Assets/cross.png')} style={styles.img} />
          </TouchableOpacity>
        </View>
        {data.map((data, key) => (
          <View key={key} style={{padding:15}}>
            {checked == key ? (
              <View style={styles.btn}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.img}
                    source={require('../Assets/radio_checked.png')}
                  />
                  <Text style={{color:colors.black}}>{data}</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row',width:50,justifyContent:'space-between'}}>
                  <Image
                    source={require('../Assets/delete.png')}
                    style={styles.img}
                  />
                  <Image
                    source={require('../Assets/heart.png')}
                    style={styles.img}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.btn}>
                <TouchableOpacity
                  onPress={() => setChecked(key)}
                  style={{flexDirection:'row'}}>
                  <Image
                    style={styles.img}
                    source={require('../Assets/radio_unchecked.png')}
                  />
                  <Text style={{color:colors.black}}>{data}</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row',width:50,justifyContent:'space-between'}}>
                  <Image
                    source={require('../Assets/delete.png')}
                    style={styles.img}
                  />
                  <Image
                    source={require('../Assets/heart.png')}
                    style={styles.img}
                  />
                </View>
              </View>
            )}
          </View>
        ))}
        <TouchableOpacity style={{...alignment.row,paddingLeft:15,alignItems:'center'}}>
          <Image source={require('../Assets/cross.png')} style={styles.img}/>
          <Text style={{paddingLeft:30,fontSize:20,color:colors.black}}>{texts.CREATE_WATCHLIST}</Text>
        </TouchableOpacity>
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
});

export default NorModal;
