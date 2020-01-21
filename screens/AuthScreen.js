import React , { Component}from 'react';
import {StyleSheet, View, ScrollView, Text, ImageBackground} from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
import Colors from "../constants/Colors"
import Login from '../components/Auth/Login'
import {  Layout } from '@ui-kitten/components';

 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage:{
   flex:1,
   resizeMode:'cover',
   opacity:0.8
  }

});
 
class Auth extends Component {
  render() { 
    return (
      <Layout style={styles.container}>
      <LinearGradient
      colors={[Colors.gradient1, Colors.gradient0]}
      style= {styles.container}
      >  
       <ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
        <Login  {...this.props}/>

        </ImageBackground>
     </LinearGradient>
     </Layout>
    );
  }
}
 
export default Auth ;


Auth.navigationOptions = {
  header: null,
};



