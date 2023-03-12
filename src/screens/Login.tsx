import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../components/CustomInput';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.loginTextHeader}>WAVE 2.0</Text>
        <Text style={styles.loginTextHeader}>Login</Text>
      </View>

      <KeyboardAvoidingView behavior="height" style={styles.inputView}>
        <CustomInput placeholder="Username" />
        <CustomInput
          rightIcon={require('../Assets/password.png')}
          placeholder="Password"
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>

      <View style={styles.signUpView}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={null}>
          <Text>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerView: {
    borderWidth: 1,
    height: '12%',
    justifyContent: 'space-around',
  },
  loginTextHeader: {
    fontSize: 20,
  },
  inputView: {
    height: '17%',
    justifyContent: 'space-between',
  },
  signUpView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginButton: {
    borderWidth: 1,
    width: '35%',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginText: {
    paddingVertical: 10,
    alignSelf: 'center',
  },
});

export default Login;
