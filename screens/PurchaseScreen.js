import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Setting from '../components/Settings';
import HeaderComponent from '../components/Header';

export default function PurchaseScreen(props) {
  return (
     <Layout style={styles.container}>
      
    </Layout>
  );
}

PurchaseScreen.navigationOptions = {
 header:<HeaderComponent screenName=""/>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
