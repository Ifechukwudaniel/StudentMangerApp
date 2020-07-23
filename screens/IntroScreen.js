import React from 'react';
import {StyleSheet, View, ScrollView, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LinearGradient } from 'expo-linear-gradient';

export default function IntroScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
        <ImageBackground  style={styles.container}  source={require('../assets/images/studentBackGroud.jpg')}>
               <LinearGradient colors={['rgba(15,15,15,0.56)','rgba(15,15,18,0.96)', 'rgba(15,15,18,1)']} style={styles.gradient}>
                   <Image resizeMode="contain" style={styles.image} source={require('../assets/images/Logo/Logo.png')} /> 
                   <Text style={styles.text}> Welcome to APP let’s get you started  </Text>
                   <TouchableOpacity style={styles.buttonStyle}>
                       <Text style={styles.buttonText}> as a GUEST </Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress = {()=>props.navigation.navigate("Auth")} style={[styles.buttonStyle, {backgroundColor:"#242426"}]}>
                        <Text style={styles.buttonText}> as a Student </Text>
                   </TouchableOpacity>
              </LinearGradient>
        </ImageBackground>
      </View>
    </Layout>
  );
}

IntroScreen.navigationOptions = {
  header:null,
};


const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image:{
    width:'200rem',
    height:'200rem',
    alignSelf: 'center',
  },
  gradient:{
    height:"100%",
    width:'100%' ,
    justifyContent:'center'
  },
  text:{
   color:"#FFFFFF",
   fontSize: '28rem',
   textAlign:'center',
   marginLeft: '40rem',
   marginRight: '40rem',
   marginTop: '40rem',
   fontWeight:'bold'
  },
  buttonStyle:{
    backgroundColor:'#FF912c',
    borderColor:"transparent",
    borderRadius:'5rem',
    width:"70%",
    color:"#fff",
    height:"70rem",
    alignSelf: 'center',
    marginTop:'50rem'
  },
  buttonText:{
    alignSelf:'center',
    color:'#fff',
    fontSize: '24rem',
    fontWeight: 'bold',
    lineHeight:'60rem'
  },
  
});
