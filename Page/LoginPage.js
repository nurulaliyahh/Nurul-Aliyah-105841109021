import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from 'react';
import ButtonCustom  from '../component/Button/Button';
import TextInputCustom from '../component/text/textinput';
import CustomText from '../component/text/text';
import Icon from '../component/Button/icon';
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex:1, backgroundColor:'white'}}>
      <View style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 30,
        marginBottom: 50,
      }}>
        <Text style= {{
          fontSize: 35,
          color: 'red',
          fontFamily: 'MetroBold'
        }}>
          Login
        </Text>
      </View>
      <View style={{ alignItems:'center', justifyContent:'center'}}>
        <TextInputCustom name="email" color="black" label="Nama"/>
        <TextInputCustom name="Password" color="red" label="Nama"/>
        <View style={{marginLeft: 150}}>
          <CustomText text="Forgot your password?" onPress={() => navigation.navigate('ForgetPass')}/>
        </View>
        <ButtonCustom color="red" text="Login" onPress={() => navigation.navigate('VisualSearch')}/>
        <View style= {{ marginTop: 100}}>
          <CustomText text="Or Login With social account"/>
        </View>
        <View style={{
          flexDirection:'row',
        }}>
          <Icon imageSource={require('../assets/google.png')}/>
          <Icon imageSource={require('../assets/facebook.png')}/>
        </View>
      </View>
    </View>
  )
}

export default LoginPage