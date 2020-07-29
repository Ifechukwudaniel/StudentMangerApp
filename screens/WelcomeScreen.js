import React from 'react';
import {StyleSheet, View, ScrollView, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen(props) {
  return (
    <Layout style={styles.container}>
       
    </Layout>
  );
}

WelcomeScreen.navigationOptions = {
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
  smallText:{
    color:"#FFFFFF",
   fontSize: '22rem',
   textAlign:'center',
   fontWeight:'700',
   marginTop: '40rem',
  },
  text:{
   color:"#FFFFFF",
   fontSize: '44rem',
   textAlign:'center',
   fontWeight:'bold',
  },
  buttonStyle:{
    backgroundColor:'#FF912c',
    borderColor:"transparent",
    borderRadius:'5rem',
    width:"90%",
    color:"#fff",
    height:"58rem",
    alignSelf: 'center',
    marginTop:'10rem'
  },
  buttonText:{
    alignSelf:'center',
    color:'#fff',
    fontSize: '24rem',
    fontWeight: 'bold',
    lineHeight:'60rem'
  },
  buttonGroup:{
     marginTop: '150rem',
  }
  
});
