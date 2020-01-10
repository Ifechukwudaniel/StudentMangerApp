import React , { Component}from 'react';
import {StyleSheet, View, ScrollView, Text, ImageBackground} from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
import Colors from "../constants/Colors"
import Login from '../components/Auth/Login'


 
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
      <LinearGradient
      colors={[Colors.gradient1, Colors.gradient0]}
      style= {styles.container}
      >  
       <ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
        <Login/>

        </ImageBackground>
     </LinearGradient>
    );
  }
}
 
export default Auth ;


Auth.navigationOptions = {
  header: null,
};



