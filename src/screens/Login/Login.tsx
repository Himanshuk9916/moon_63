import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {texts} from '../../constants/text';
import alignment from '../../utils/alignment';
import styles from './LoginStyle';
import {colors} from '../../constants/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Login() {
  const [modalVisible, setModalVisible] = useState(false);

  const modalView = () => {
    const timingsData = [
      {
        index: 'NSE',
        marketTiming: '9:00AM-15:30PM',
        amoTiming: '00:00AM-00:00AM',
      },
      {
        index: 'BSE',
        marketTiming: '9:00AM-15:30PM',
        amoTiming: '00:00AM-00:00AM',
      },
      {
        index: 'NDCEX',
        marketTiming: '9:00AM-15:30PM',
        amoTiming: '00:00AM-00:00AM',
      },
      {
        index: 'MCX',
        marketTiming: '9:00AM-15:30PM',
        amoTiming: '00:00AM-00:00AM',
      },
      {
        index: 'MCX-SX',
        marketTiming: '9:00AM-15:30PM',
        amoTiming: '00:00AM-00:00AM',
      },
    ];
    return (
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modalView}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
            Exchange Timings
          </Text>
          <FlatList
            data={timingsData}
            renderItem={({item}) => (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text>{item.index}</Text>
                <Text>{item.marketTiming}</Text>
                <Text>{item.amoTiming}</Text>
              </View>
            )}
          />
        </View>
      </Modal>
    );
  };

  const newUserSignUpView = () => {
    return (
      <View style={styles.newUserSignupContainer}>
        <Text style={{color: 'white'}}>New User?</Text>
        <View style={{...alignment.row_spacebtn}}>
          <View style={{width: 220}}>
            <Text style={{color: colors.white}}>{texts.SIGNUP_INFO}</Text>
          </View>
          <TouchableOpacity style={styles.singUpButton}>
            <Text style={{paddingHorizontal: 40}}>{texts.SIGNUP}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.loginTextHeader}>WAVE 2.0</Text>
        <Text style={styles.loginTextHeader}>{texts.LOGIN}</Text>
      </View>

      <View style={styles.inputView}>
        <CustomInput placeholder="Username" />
        <CustomInput
          rightIcon={require('../../Assets/password.png')}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <View style={{paddingBottom: '20%', height: '40%'}}>
        <View style={styles.signUpView}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>{texts.LOGIN}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={null}>
            <Text style={styles.forgotPText}>{`${texts.FORGOT_PASS} ?`}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text>{texts.NOT_REGISTERED}</Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>{texts.REGISTER}</Text>
          </TouchableOpacity>
        </View>
        <View>{newUserSignUpView()}</View>
      </View>

      <View>
        <Text>{texts.EXCHANGES}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.forgotPText}>{texts.TIMINGS}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPText}>{texts.ABOUT_US}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPText}>{texts.MEMBERSHIP}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {modalView()}
    </SafeAreaView>
  );
}

export default Login;
