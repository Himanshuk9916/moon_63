import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {texts} from '../constants/text';
import {colors} from '../constants/colors';
import IndexModal from './Modal';

function Header(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [nifty, setNifty] = useState(true);
  const [sensex, setSenSex] = useState(true);
  const [other, setOther] = useState(false);

  const niftyView = () => {
    return (
      <View style={styles.niftyContainerView}>
        <View>{/* <Text>View1</Text> */}</View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nifty_value_text}>
            {other ? texts.OTHER : texts.NIFTY_50}
          </Text>
          <Text style={styles.nifty_value_text}>{texts[17755]}</Text>
          <Text style={styles.niftyValue}>{texts[160]}</Text>
        </View>
      </View>
    );
  };

  const sensexView = () => {
    return (
      <View style={styles.niftyContainerView}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nifty_value_text}>{texts.SENSEX}</Text>
          <Text style={styles.nifty_value_text}>{texts[60397]}</Text>
          <Text style={styles.niftyValue}>{texts[588]}</Text>
        </View>
        <View style={styles.settingsView}>
          <TouchableOpacity>
            <Image
              source={require('../Assets/rupees.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(prev => !prev)}>
            <Image
              source={require('../Assets/settings.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const onClose = () => {
    setModalVisible(prev => !prev);
  };

  const getData = (data: any, name: any) => {
    if (data == 'Nifty') {
      setNifty(name);
    } else if (data == 'SenSex') {
      setSenSex(name);
    } else {
      setOther(name);
    }
  };

  return (
    <>
      <IndexModal
        visible={modalVisible}
        onClose={onClose}
        getData={(items: any, name: any) => getData(items, name)}
        nifty={nifty}
        sensex={sensex}
      />
      <View style={styles.container}>
        <View style={styles.headerView}>
          {niftyView()}
          {sensexView()}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
  },
  nifty_value_text: {
    fontWeight: 'bold',
    color: colors.black,
  },
  niftyValue: {
    color: colors.bright_green,
  },
  niftyContainerView: {
    borderRightWidth: 1,
    borderRightColor: colors.grey,
    width: '50%',
    height: '350%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '1%',
  },
  settingsView: {
    height: '100%',
    justifyContent: 'space-around',
  },
  image: {
    height: 20,
    width: 20,
  },
  headerView: {
    flexDirection: 'row',
    height: '30%',
  },
});

export default Header;
