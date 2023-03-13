import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {texts} from '../../constants/text';
import alignment from '../../utils/alignment';
import styles from './LoginStyle';
import {colors} from '../../constants/colors';
import TimingModal from '../../components/TimingModal';

function Login() {
  const [modalVisible, setModalVisible] = useState(false);

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

  const onClose=()=>{
    setModalVisible((prevState)=>!prevState)
  }

  return (
    <SafeAreaView style={modalVisible?styles.containerBlur:styles.container}>
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
        <View style={{...alignment.row, marginVertical: 15}}>
          <Text>{texts.NOT_REGISTERED}</Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>{texts.REGISTER}</Text>
          </TouchableOpacity>
        </View>
        <View>{newUserSignUpView()}</View>
      </View>

      <View>
        <Text>{texts.EXCHANGES}</Text>
        <View style={{...alignment.row_spacebtn}}>
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
      <TimingModal 
      visible={modalVisible}
      onClose={onClose}
      />
    </SafeAreaView>
  );
}

export default Login;
