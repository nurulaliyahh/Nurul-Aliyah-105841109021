import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomText =({ text, color, fontSize, onPress }) =>{
    return(
      <TouchableOpacity onPress={onPress}>
      
      <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:29,
      marginBottom:10
      
    }}>
      <Text style={{
      color: color,
      fontSize: fontSize,
      fontFamily: 'MetroMedium'
    
    }}>
      {text}
    </Text>   
    </View>
    </TouchableOpacity>
    )
}

export default CustomText