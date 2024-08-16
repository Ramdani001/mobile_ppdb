import React from 'react';
import {  Button, Image ,ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppNavigator } from '../../utils/useAppNavigator';
import { StatusBar } from 'expo-status-bar';
const image = { uri: "https://github.com/Ramdani001/mobile_ppdb/blob/main/assets/bg.JPG?raw=true" };

const Login = () => {
    const Navigation = useAppNavigator();
    return(
        <ImageBackground source={image} style={styles.container}>

        <View style={styles.form}>

          {/* Logo */}
          <View style={
            {
              justifyContent: 'center',
              alignItems: 'center',
            }
          }>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}></Image>
          </View>
          
          {/* Form */}
          <View style={{marginTop: 20}}>
            <TextInput style={styles.input} placeholder='Email Address'>
            </TextInput>
            <TextInput style={styles.input} placeholder='Psssword'>
            </TextInput>

            <TouchableOpacity style={styles.button}>
              <Text style={{color: 'white'}} >Masausk</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,}}>
              <Text style={{fontSize: 10, padding: 10,}}>
                Belum memiliki akun ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                    Navigation.navigate("Onboarding", {
                        screen: "Register",
                    })
                }}
              >
                <Text style={{fontSize: 10, color: 'blue'}}>Daftar</Text>
              </TouchableOpacity>
            </View>

          </View>
          {/* Form */}

        </View>
      </ImageBackground>
    )
}

export default Login;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    form:{
      margin: 20,
      width: 300,
      height: 400,
      padding: 20,
      borderRadius: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
  
    input: {
      width: 240,
      marginTop: 25,
      borderBottomWidth: 1,
    },
    logo: {
      width: 100,
      height: 100,
    },
    
    button: {
      padding: 10,
      marginTop: 30,
      alignItems: 'center',
      borderRadius: 30,
      elevation: 8,
      backgroundColor: 'blue',
      justifyContent: 'center',
    },
  
    regis: {
      display: 'flex',
    }
  
  });
  