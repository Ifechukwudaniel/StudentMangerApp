import React, {Component, useRef} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Level from '../components/Level'
import Home from '../components/Home';
import HeaderComponent from '../components/Header';
import HandOutItem from '../components/Handout/HandOutItem';

const  MaterialScreen = (props)=>{
  const headerRef = useRef();
   console.log(props.navigation.state)
    return (
      <Layout style={styles.container}>
      <View style={styles.container}>
         <HeaderComponent  ref= {headerRef} {...props} screenName={props.navigation.state.params.courseCode} back/>
         {/* <Home header= {headerRef} {...props}/> */}
         <HandOutItem/>
         <HandOutItem/>
         <HandOutItem/>
      </View>
    </Layout>
    );
}
 
export default MaterialScreen;

MaterialScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
