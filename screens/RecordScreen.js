import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import HeaderComponent from '../components/Header';

export default function RecordScreen(props) {
  return (
    <Layout style={styles.container}>
       <HeaderComponent screenName="Record"/>
    </Layout>
  );
}

RecordScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
