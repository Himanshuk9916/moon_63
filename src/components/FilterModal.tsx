import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const FilterModal = (props: any) => {
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      transparent={true}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View style={styles.modalView}>
        <Text>Sort & Filter</Text>
        <View style={{backgroundColor:"yellow",height:250,justifyContent:"space-between"}}>
          <Text>Alphabetically</Text>
          <View style={{flexDirection: 'row',width:200,justifyContent:"space-between"}}>
            <TouchableOpacity
              style={styles.commonHtZ}>
              <Text>A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.commonHtZ}>
              <Text>A-Z</Text>
            </TouchableOpacity>
          </View>
          <Text>Price</Text>
          <View style={{flexDirection: 'row',width:250,justifyContent:"space-between"}}>
            <TouchableOpacity
              style={styles.commonHtL}>
              <Text>High to Low</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.commonHtL}>
              <Text>Low to High</Text>
            </TouchableOpacity>
          </View>
          <Text>Percentage</Text>
          <View style={{flexDirection: 'row',width:250,justifyContent:"space-between"}}>
            <TouchableOpacity
              style={styles.commonHtL}>
              <Text>High to Low</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.commonHtL}>
              <Text>Low to High</Text>
            </TouchableOpacity>
          </View>
          <Text>Type</Text>
          <View style={{flexDirection: 'row',width:200,justifyContent:"space-between"}}>
            <TouchableOpacity
              style={styles.commonHtZ}>
              <Text>A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.commonHtZ}>
              <Text>A-Z</Text>
            </TouchableOpacity>
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
  commonHtL:{
    borderWidth: 1,
    height: 35,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonHtZ:{
    borderWidth: 1,
    height: 35,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default FilterModal;
