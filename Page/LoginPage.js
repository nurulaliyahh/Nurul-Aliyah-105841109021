import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const TextInputCustom = ({ name, color, value, onChangeText }) => (
  <TextInput
    placeholder={name}
    style={[styles.customTextInput, { color: color }]}
    value={value}
    onChangeText={onChangeText}
  />
);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);

  const handleForgotPassword = () => {
    setIsForgotPasswordVisible(true);
  };

  const handleSendEmail = () => {
  };

  const handleBackPress = () => {
    // Logic to handle back button press
  };

  const [fontsLoaded] = useFonts({
    'MetroBold' : require('../assets/fonts/Metropolis-Bold.otf'),
    'MetroMedium' : require('../assets/fonts/Metropolis-Medium.otf'),
  })
    
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {isForgotPasswordVisible ? (
        <>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>&larr;</Text>
          </TouchableOpacity>
          <Text style={[styles.title, { fontFamily: 'MetroBold'}]}>Forgot Password</Text>
          <TextInputCustom name="Email" color="black" value={email} onChangeText={setEmail} />
          <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
            <Text style={[styles.buttonText, { fontFamily: 'MetroBold'}]}>SEND</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>&larr;</Text>
          </TouchableOpacity>
          <Text style={styles.title}>LOGIN</Text>
          <TextInputCustom name="Email" color="black" value={email} onChangeText={setEmail} />
          <TextInputCustom name="Password" color="red" value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.forgotContainer} onPress={handleForgotPassword}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
            <Text style={styles.arrow}>&rarr;</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Or login with social account</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/google.png')}
                style={styles.socialButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/facebook.png')}
                style={styles.socialButtonImage}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    fontSize: 30,
    color: '#ff3b30',
  },
  title: {
    fontSize: 30,
    alignSelf: 'flex-start',
    marginBottom: 70,
    fontFamily: 'MetroBold',
  },
  customTextInput: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  forgotText: {
    fontSize: 14,
    color: '#7d7d7d',
    lineHeight: 15,
    fontFamily: 'MetroMedium',
  },
  arrow: {
    fontSize: 20,
    color: '#ff3b30',
    lineHeight: 20,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: '#ff3b30',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'MetroBold',
  },
  loginText: {
    fontSize: 15,
    color: '#7d7d7d',
    marginTop: 100,
    marginVertical: 15,
    fontFamily: 'MetroMedium',
    
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 10,
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
});

export default App;
