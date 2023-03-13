import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CustomInput from '../components/CustomInput';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Login() {
  const newUserSignUpView = () => {
    return (
      <View
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 10,
          borderRadius: 10,
          height: 100,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>New User?</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: 220}}>
            <Text style={{color: 'white'}}>
              Signup with your mobile and start 15 days(s) free trial now
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <Text style={{paddingHorizontal: 40}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const availableExchanges = [
    'NSE',
    'BSE',
    'HCDEX',
    'HCX',
    'HCX-SX',
    'HCX-EO',
    'DSE',
    'NHCE',
    'NSEL',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.loginTextHeader}>WAVE 2.0</Text>
        <Text style={styles.loginTextHeader}>Login</Text>
      </View>

      <View style={styles.inputView}>
        <CustomInput placeholder="Username" />
        <CustomInput
          rightIcon={require('../Assets/password.png')}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <View>
        <View style={styles.signUpView}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={null}>
            <Text style={styles.forgotPText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text>Haven't registered yet?Click here to </Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View>{newUserSignUpView()}</View>
      </View>

      <View>
        <Text>Availbale Exchanges</Text>
        {/* {availableExchanges.map((item)=>(
            <View style={{display:'flex',flexDirection:'row'}}>
            <Text>{item}</Text>
            </View>
        ))} */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Text style={styles.forgotPText}>Exchange Timings</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPText}>About US</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPText}>Membership Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerView: {
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
  forgotPText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  registerText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default Login;
