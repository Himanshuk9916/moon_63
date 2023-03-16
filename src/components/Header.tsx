import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {assets} from '../Assets';
import {colors} from '../constants/colors';
import {texts} from '../constants/text';
import alignment from '../utils/alignment';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import IndexModal from '../components/Modal';

function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const [niftyValue, setNiftyValue] = useState(true);
  const [sensexValue, setSenSexValue] = useState(true);
  const [otherValue, setOtherValue] = useState(false);

  useEffect(() => {
    if (niftyValue && sensexValue && otherValue) {
      showMessage({
        message: 'Information',
        description: 'Please select any two indices',
        type: 'danger',
      });
    }
  }, [niftyValue, sensexValue, otherValue]);

  const data = [
    {
      name: texts.NIFTY_50,
      value: '17755.00',
      change: '160.65',
      percentage: '+0.91%',
    },
    {
      name: texts.SENSEX,
      value: '60397.62',
      change: '588.65',
      percentage: '0.98%',
    },
  ];

  const onClose = () => {
    setModalVisible(prev => !prev);
  };

  const changeIndex = (text: any) => {
    switch (text) {
      case 'Nifty':
        setNiftyValue((prevState: any) => !prevState);
        break;
      case 'SenSex':
        setSenSexValue((prevState: any) => !prevState);
        break;
      case 'Other':
        setOtherValue((prevState: any) => !prevState);
        break;

      default:
        null;
    }
  };

  const renderIndexView = ({item}: any) => {
    return (
      <View style={{marginHorizontal: 20, alignItems: 'center'}}>
        <Text style={styles.titleText}>{item.name}</Text>
        <Text style={styles.titleText}>{item.value}</Text>
        <Text
          style={
            styles.changePercentage
          }>{`${item.change}(${item.percentage})`}</Text>
      </View>
    );
  };
  return (
    <>
      <IndexModal
        visible={modalVisible}
        onClose={onClose}
        changeIndex={changeIndex}
        niftyValue={niftyValue}
        sensexValue={sensexValue}
        otherValue={otherValue}
      />
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={renderIndexView}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{...alignment.space_between}}>
          <TouchableOpacity>
            <Image
              source={assets.rupees}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(prev => !prev)}>
            <Image
              source={assets.settings}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlashMessage
        position={'top'}
        animated={true}
        animationDuration={1000}
        floating={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '8%',
  },
  image: {
    height: 20,
    width: 20,
  },
  titleText: {
    fontWeight: 'bold',
    color: colors.black,
    paddingHorizontal: 50,
  },
  changePercentage: {
    color: colors.bright_green,
  },
});

export default Header;
