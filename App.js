import { StyleSheet, Text, View, } from 'react-native';
import React from 'react'
const App = () => {
  return(
    <View style={{ flex: 1 }}>
    <View style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end', // baris
      justifyContent: 'center', // Kolom
      marginBottom: 100,

    }}>
      <View style={{
        flex:1,
        backgroundColor: 'red', width: 130, height: 60,
        justifyContent: 'center',
        borderRadius: 10,
        marginRight:10,
        marginLeft: 10,
      }}>
        <Text style={{
          fontSize: 20 , color: 'white',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Login
        </Text>
        </View>
        <View style={{
        flex:1,
        backgroundColor: 'red', width: 130, height: 60,
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10,
      }}>  
        <Text style={{
          fontSize: 20 , color: 'white',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Register
        </Text>
        </View>
      </View>
      </View>
  )
}
export default App