import React,{useState,useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

function StockDetailsList() {
    const [stockData,setStockData]=useState<any>();

    useEffect(()=>{
        pushStockData()
    },[])

    const pushStockData = () => {
        let StockArraydata = [];
        for (let i = 0; i < 20; i++) {
          StockArraydata.push({
            companyName: Math.floor(Math.random() * 99),
            index: 'NSE',
            value: Math.floor(Math.random() * 999),
            dayValue: '35.15',
            percentage: '1.65',
            id: i,
          });
        }
        setStockData(StockArraydata);
      };

      const onPressD=(id)=>{
        console.log('Id',id)
      }


  return (
    <View
      style={styles.chipScrollView}>
      <FlatList
        data={stockData}
        // getItemLayout={(stockData,index)=>(
        //     {length:250,offset:250*index,index:6}
        // )}
        horizontal={true}
        renderItem={({item,index}) => (
          <TouchableOpacity
          onPress={()=>onPressD(index)}
            style={{
              backgroundColor: 'yellow',
              height: 400,
              width: 250,
              marginHorizontal: 20,
            }}>
            <Text>{item.companyName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chipScrollView: {
    position: 'absolute',
    paddingHorizontal: 10,
    top: 250,
  },
});

export default StockDetailsList;
