import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Icon = ({ imageSource, onPress }) => {
    return (
    <TouchableOpacity onPress={onPress} >
    <View style={styles.container}>
      <Image
      source={imageSource}
      style={styles.image}
      />
      </View>
      </TouchableOpacity>
    );
}  

const styles = StyleSheet.create({
    container: {
      marginTop:10,
      marginBottom: 90
    },
    image: {
      width:30, 
      height:30, 
      borderRadius: 100, 
      marginRight:20,
      marginLeft:20

    },
     
});

       

export default Icon