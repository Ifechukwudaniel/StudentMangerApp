import React, {Component, useRef} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Level from '../components/Level'
import Home from '../components/Home';
import HeaderComponent from '../components/Header';

const  HomeScreen = (props)=>{
  const headerRef = useRef();
    return (
      <Layout style={styles.container}>
      <View style={styles.container}>
         <HeaderComponent  ref= {headerRef} {...props} screenName="HOME"/>
         <Home header= {headerRef} {...props}/>
      </View>
    </Layout>
    );
}
 
export default HomeScreen;

HomeScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
