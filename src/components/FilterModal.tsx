import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import alignment from '../utils/alignment';

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
        <View style={{height: 250, justifyContent: 'space-between'}}>
          <Text>Alphabetically</Text>
          <View style={styles.aplhaType}>
            <TouchableOpacity style={styles.commonHtZ}>
              <Text>A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commonHtZ}>
              <Text>A-Z</Text>
            </TouchableOpacity>
          </View>
          <Text>Price</Text>
          <View style={styles.pricePercentage}>
            <TouchableOpacity style={styles.commonHtL}>
              <Text>High to Low</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commonHtL}>
              <Text>Low to High</Text>
            </TouchableOpacity>
          </View>
          <Text>Percentage</Text>
          <View style={styles.pricePercentage}>
            <TouchableOpacity style={styles.commonHtL}>
              <Text>High to Low</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commonHtL}>
              <Text>Low to High</Text>
            </TouchableOpacity>
          </View>
          <Text>Type</Text>
          <View style={styles.aplhaType}>
            <TouchableOpacity style={styles.commonHtZ}>
              <Text>A-Z</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commonHtZ}>
              <Text>A-Z</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button title="Press" onPress={props.onClose} />
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
  commonHtL: {
    borderWidth: 1,
    height: 35,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonHtZ: {
    borderWidth: 1,
    height: 35,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aplhaType: {
    width: 200,
    ...alignment.row_SpaceB,
  },
  pricePercentage: {
    width: 250,
    ...alignment.row_SpaceB,
  },
});

export default FilterModal;
