import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    headerView: {
      height: '17%',
      justifyContent: 'space-around',
    },
    loginTextHeader: {
      fontSize: 30,
    },
    inputView: {
      height: '25%',
      justifyContent: 'space-between',
      paddingBottom: '10%',
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
    modalView:{
        position: 'absolute',
        top: 300,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    newUserSignupContainer:{
      backgroundColor: 'black',
      paddingHorizontal: 10,
      borderRadius: 10,
      height: 100,
      justifyContent: 'center',
    },
    singUpButton:{
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
    }
  });

  export default styles;