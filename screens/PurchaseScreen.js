import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import HeaderComponent from '../components/Header';
import PurchaseItem from '../components/Purchase/PurchaseItem'

export default function PurchaseScreen(props) {
  return (
     <Layout style={styles.container}>
      <HeaderComponent  {...props} screenName="PURCHASE"/>
      <ScrollView>
      <PurchaseItem/>
        <PurchaseItem/>
      </ScrollView>
    </Layout>
  );
}

PurchaseScreen.navigationOptions = {
 header:<HeaderComponent screenName=""/>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
