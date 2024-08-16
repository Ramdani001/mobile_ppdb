import { StatusBar } from 'expo-status-bar';
import {  ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
const image = { uri: "../assets/bg.JPG" };
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.form}>


          <TextInput style={styles.input} placeholder='Email Address'>
          </TextInput>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    // backgroundColor: '#41526e30',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form:{
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    width: 300,
    height: 400,
    borderRadius: 20,
  },

  input: {
    width: 240,
    marginTop: 30,
    borderBottomWidth: 1,
  }

});
