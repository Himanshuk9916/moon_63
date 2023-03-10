import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Modal, Alert, StyleSheet, FlatList, Button} from 'react-native';
import CheckBox from 'react-native-check-box';
import {texts} from '../constants/text';

function IndexModal(props: any) {
//Note-Temporarily commented for checking only


  // const [nifty, setNifty] = useState(props.niftyValue);
  // const [senSex, setSenSex] = useState(props.sensexValue);
  // const [other, setOther] = useState(props.otherValue);


  // const updateState = (text: any) => {
    // updateData(text)
  //   switch (text) {
  //     case 'Nifty':
  //       setNifty((prevState:any)=>!prevState);
  //       return props.getData(text,!nifty);
  //     case 'SenSex':
  //       setSenSex((prevState:any)=>!prevState);
  //       return props.getData(text,!senSex);
  //     case 'Other':
  //       setOther((prevState: any)=>!prevState);
  //       return props.getData(text,other);
  //   }
  // };

 

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
              props.anyFunction('Nifty')
            }}
            isChecked={props.niftyValue}
          />
        </View>
        <View style={styles.modalContentView}>
          <Text>{texts.SENSEX}</Text>
          <CheckBox
            onClick={() => {
              props.anyFunction('SenSex')
            }}
            isChecked={props.sensexValue}
          />
        </View>
        <View style={styles.modalContentView}>
          <Text>{texts.OTHER}</Text>
          <CheckBox
            onClick={() => {
              props.anyFunction('Other')
            }}
            isChecked={props.otherValue}
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
