import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {assets} from '../../Assets';
import {colors} from '../../constants/colors';
import CommonModal from '../CommonModal/CommonModal';

const DotModal = (props: any) => {
  const data = [
    {
      icon: assets.cross,
      label: 'Add Script',
      onPress: (item: any) => {
        console.log(item);
      },
    },
    {
      icon: assets.cross,
      label: 'Remove Script',
      onPress: (item: any) => {
        console.log(item);
      },
    },
    {
      icon: assets.cross,
      label: 'Filter',
      onPress: (item: any) => {
        console.log(item);
      },
    },
    {
      icon: assets.cross,
      label: 'Reorder Scripts',
      onPress: (item: any) => {
        console.log(item);
      },
    },
    {
      icon: assets.cross,
      label: 'Rename watchlist',
      onPress: (item: any) => {
        console.log(item);
      },
    },
    {
      icon: assets.cross,
      label: 'Delete watchlsit',
      onPress: (item: any) => {
        console.log(item);
      },
    },
    {
      icon: assets.cross,
      label: 'Create new watchlist',
      onPress: (item: any) => {
        console.log(item);
      },
    },
    {
      icon: assets.cross,
      label: 'Mark this default',
      onPress: (item: any) => {
        console.log(item);
      },
    },
  ];

  const renderView = (item: any) => {
    console.log(item.label);
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', height: 42, alignItems: 'center'}}
        onPress={() => item.onPress(item)}>
        <Image source={item.icon} style={{height: 15, width: 15}} />
        <Text style={{color: colors.black, paddingLeft: 20, fontSize: 15}}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <CommonModal visible={props.visible} onClose={props.onClose}>
      <TouchableOpacity onPress={props.onClose}>
        <Image source={assets.cross} style={styles.image} />
      </TouchableOpacity>
      <FlatList data={data} renderItem={({item}) => renderView(item)} />
    </CommonModal>
  );
};

const styles = StyleSheet.create({
  commonTimingView: {
    height: 300,
    width: 120,
    alignItems: 'flex-start',
  },
  image: {
    height: 20,
    width: 20,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
});

export default DotModal;
