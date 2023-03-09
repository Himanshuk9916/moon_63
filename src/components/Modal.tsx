import React, {useEffect, useState} from 'react';
import {View, Text, Modal, Alert, StyleSheet, FlatList, Button} from 'react-native';
import CheckBox from 'react-native-check-box';
import {texts} from '../constants/text';

function IndexModal(props: any) {
  const [nifty, setNifty] = useState(props.nifty);
  const [senSex, setSenSex] = useState(props.sensex);
  const [other, setOther] = useState(true);

  const updateState = (text: any) => {
    switch (text) {
      case 'Nifty':
        setNifty((prev: any) => !prev);
        return props.getData(text, !nifty);
      case 'SenSex':
        setSenSex((prev: any) => !prev);
        return props.getData(text, !senSex);
      case 'Other':
        setOther(!other);
        return props.getData(text, other);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentView}>
          <Text>{texts.NIFTY}</Text>
          <CheckBox
            onClick={() => {
              updateState('Nifty');
            }}
            isChecked={nifty}
          />
        </View>
        <View style={styles.modalContentView}>
          <Text>{texts.SENSEX}</Text>
          <CheckBox
            onClick={() => {
              updateState('SenSex');
            }}
            isChecked={senSex}
          />
        </View>
        <View style={styles.modalContentView}>
          <Text>{texts.OTHER}</Text>
          <CheckBox
            onClick={() => {
              updateState('Other');
            }}
            isChecked={!other}
          />
        </View>
        <Button title='Press' onPress={()=>props.onClose()}/>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 200,
    bottom: 200,
    left: 50,
    right: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'space-around',
    padding: 10,
  },
  modalContentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default IndexModal;
