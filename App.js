import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react'
import ButtonCustom from './component/Button/Button'
const App = () => {

  return(  
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 270
      }}>
        <Image
        source={require('./assets/bukbapak.png')}
        style={{
          width: 160,
          height: 160,
          marginBottom: 50 
        }}
        />
      </View>

    <View style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end', // baris
      justifyContent: 'center', // Kolom
      marginBottom: 100,

    }}>
      <ButtonCustom color = 'crimson' text = 'Login'/>
      <ButtonCustom color = 'green' text = 'Register'/>
      </View>
      </View>
  )
  }
  
export default App