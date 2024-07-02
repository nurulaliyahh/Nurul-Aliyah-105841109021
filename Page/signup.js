import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';


const CustomButton = ({ color, text }) => (
  <View style={[styles.customButton, { backgroundColor: color }]}>
    <Text style={styles.customButtonText}>
      {text}
    </Text>
  </View>
);

const TextInputCustom = ({ name, color, value, onChangeText }) => (
  <TextInput
    placeholder={`Masukkan ${name}`}
    style={[styles.customTextInput, { color: color }]}
    value={value}
    onChangeText={onChangeText}
  />
);

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    'MetroBold' : require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroMedium' : require('./assets/fonts/Metropolis-Medium.otf'),
  })
    
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'MetroBold'}]}>SIGN UP</Text>
      <TextInputCustom name="Name" color="black" value={username} onChangeText={setUsername} />
      <TextInputCustom name="Email" color="black" value={email} onChangeText={setEmail} />
      <TextInputCustom name="Password" color="red" value={password} onChangeText={setPassword} />
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Already have an account? <Text style={styles.arrow}>&rarr;</Text></Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, { fontFamily: 'MetroBold'}]}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={[styles.signupText, { fontFamily: 'MetroMedium'}]}>Or sign up with social account</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('./assets/google.png')}
            style={styles.socialButtonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('./assets/facebook.png')}
            style={styles.socialButtonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'MetroBold',
    alignSelf: 'flex-start',
    marginBottom: 70,
  },
  customTextInput: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: '#ff3b30',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'MetroBold',
  },
  accountContainer: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 5,
  },
  accountText: {
    fontSize: 14,
    fontFamily: 'MetroMedium',
    color: '#7d7d7d',
  },
  arrow: {
    fontSize: 20,
    color: '#ff3b30',
  },
  signupText: {
    fontSize: 15,
    fontFamily: 'MetroMedium',
    color: '#7d7d7d',
    marginTop: 100,
    marginVertical: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  socialButtonImage: {
    width: 24,
    height: 24,
  },
  customButton: {
    width: 130,
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  customButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
