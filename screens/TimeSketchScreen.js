import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import HeaderComponent from '../components/Header';
import Activity from '../components/Activity';

export default function TimeSketchScreen(props) {
  return (
    <Layout style={styles.container}>
     <HeaderComponent {...props} screenName="HOME"/>
     <Activity/>
    </Layout>
  );
}

TimeSketchScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
