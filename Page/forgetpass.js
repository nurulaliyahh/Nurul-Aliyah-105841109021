import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from 'react';
import ButtonCustom  from '../component/Button/Button';
import TextInputCustom from '../component/text/textinput';
import CustomText from '../component/text/text';
import Icon from '../component/Button/icon';
import { useNavigation } from "@react-navigation/native";

const ForgetPass = () => {
  const navigation = useNavigation();
  return(
    <View style={{ flex:1, backgroundColor:'white'}}>
      <View style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 50,
        marginLeft: 30,
        marginBottom: 50
      }}>
        <Text style={{
          fontSize: 35,
          color: 'black',
          fontFamily: 'MetroBold',
          marginLeft: 15
        }}>
          Forgot Password
        </Text>
      </View>
      <View style={{ alignItems:'center', justifyContent:'center'}}>
        <View style={{ marginBottom: 30}}>
          <CustomText text="Please, enter your email address. You will receive a link to create a new password via email."/>
        </View>
        <TextInputCustom name="email" color="black" label="Nama"/>
        <CustomText text="Not a valid email address. Should be your@email.com" color="red" fontSize={12}/>
        <ButtonCustom color="red" text="Send"/>
      </View>
    </View>
  )
}

export default ForgetPass