import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
// import RadioGroup, {RadioButton} from 'react-native-radio-buttons-group';

const NorModal = (props: any) => {
  const [selected, setSelected] = useState('');

  const data=[
    {
        id:1,
        
    }
  ]
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      transparent={true}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View style={styles.modalView}>
        <Text>Select Watchlist</Text>
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
  container:{
    backgroundColor:"yellow"
  }
});

export default NorModal;
