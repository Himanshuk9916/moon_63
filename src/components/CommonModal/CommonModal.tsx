import React, {useEffect} from 'react';
import {View, Text, Modal, StyleSheet, BackHandler, Alert} from 'react-native';

function CommonModal(props: any) {
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      onRequestClose={() => props.onClose()}
      transparent={true}>
      <View style={styles.modalView}>{props.children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: 320,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default CommonModal;
