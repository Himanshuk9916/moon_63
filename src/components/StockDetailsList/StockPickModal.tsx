import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants/colors';
import alignment from '../../utils/alignment';

const StockPickModal = (props: any) => {


  const data = [
    {
      companyName: 'DEVYANI',
      rate: '145.55',
      valueChange: '-2.20',
      percentage: '-1.49',
    },
  ];

  const leftData = [
    {
      qty: '300',
      orders: '4',
      bid: '145.90',
    },
    {
      qty: '300',
      orders: '4',
      bid: '145.90',
    },
    {
      qty: '300',
      orders: '4',
      bid: '145.90',
    },
    {
      qty: '300',
      orders: '4',
      bid: '145.90',
    },
  ];

  const rightData = [
    {
      ask: '145.45',
      orders: '2',
      qty: '4',
    },
    {
      ask: '145.45',
      orders: '2',
      qty: '4',
    },
    {
      ask: '145.45',
      orders: '2',
      qty: '4',
    },
    {
      ask: '145.45',
      orders: '2',
      qty: '4',
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          height: 200,
          width: 100,
          backgroundColor: 'yellow',
          marginHorizontal: 30,
        }}>
        <Text>{item.name}</Text>
      </View>
    );
  };


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => props.onClose()}>
      <ScrollView style={styles.container}
      >
        {/* Top View */}
        <View style={{...alignment.row_SpaceB}}>
          <View>
            <Text>Devyani</Text>
            <Text>NSE</Text>
          </View>

          <View>
            <Text>145.55</Text>
            <Text>-2.20(-1.49%)</Text>
          </View>
        </View>
        {/* End Top View */}

        {/* ButtonView */}
        <View
          style={{
            ...alignment.row_SpaceB,
            paddingHorizontal: 15,
            paddingVertical: 20,
          }}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#50C878'}]}>
            <Text style={{color: colors.white}}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#C70039'}]}>
            <Text style={{color: colors.white}}>Sell</Text>
          </TouchableOpacity>
        </View>
        {/* End Button View */}

        {/* Orders View */}
        <View
          style={{
            ...alignment.row_SpaceB,
            paddingHorizontal: 15,
            paddingVertical: 20,
          }}>
          <View style={styles.commonOrdersView}>
            <View style={{...alignment.row_SpaceB}}>
              <Text style={styles.titleText}>Qty</Text>
              <Text style={styles.titleText}>Orders</Text>
              <Text style={styles.titleText}>Bid</Text>
            </View>
            <FlatList
              data={leftData}
              renderItem={({item}) => (
                <View style={{...alignment.row_SpaceB, paddingVertical: 6}}>
                  <Text>{item.qty}</Text>
                  <Text>{item.orders}</Text>
                  <Text>{item.bid}</Text>
                </View>
              )}
            />
          </View>

          <View style={styles.commonOrdersView}>
            <View style={{...alignment.row_SpaceB}}>
              <Text style={styles.titleText}>Ask</Text>
              <Text style={styles.titleText}>Orders</Text>
              <Text style={styles.titleText}>Qty</Text>
            </View>
            <FlatList
              data={rightData}
              renderItem={({item}) => (
                <View style={{...alignment.row_SpaceB, paddingVertical: 6}}>
                  <Text>{item.ask}</Text>
                  <Text>{item.orders}</Text>
                  <Text>{item.qty}</Text>
                </View>
              )}
            />
          </View>
        </View>
        {/* End Orders View */}

        {/* <FlatList 
            horizontal={true}
            data={data}
            renderItem={renderItem}
            /> */}
      </ScrollView>
     </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 200,
    left: 20,
    right: 20,
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  button: {
    width: 120,
    height: 35,
    ...alignment.alignC_justifyC,
    borderRadius: 10,
  },
  commonOrdersView: {
    height: 150,
    width: 140,
  },
  titleText: {
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default StockPickModal;
