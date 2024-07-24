import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from 'react';
import ButtonCustom from '../component/Button/Button';
import TextInputCustom from '../component/text/textinput';
import CustomText from '../component/text/text';
import Icon from '../component/Button/icon';
import { useNavigation } from "@react-navigation/native";

const SignupPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 50
      }}>
        <Text style={{
          fontSize: 35,
          color: 'red',
          fontFamily: 'MetroBold'
        }}>
          Signup
        </Text>
      </View>
      
    
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TextInputCustom name="Username" color="black" label="Nama" />
        <TextInputCustom name="Email" color="black" label="Nama" />
        <TextInputCustom name="Password" color="red" label="Nama" />
        <View style={{ marginLeft: 30 }}>
          <CustomText text="Already have an account?" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
      
      
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 80 }}>
        <ButtonCustom color="red" text="SignUp" onPress={() => navigation.navigate('Login')} />
        <CustomText text="Or Sign Up with social account" />
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Icon imageSource={require('../assets/google.png')} onPress={() => navigation.navigate('Login')} />
          <Icon imageSource={require('../assets/facebook.png')} onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </View>
  )
}

export default SignupPage;
