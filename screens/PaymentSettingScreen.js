import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import PaymentSetting from '../components/PaymentSetting';

export default function PaymentSettingScreen(props) {
  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.container}>
         <PaymentSetting {...props}/>
      </ScrollView>
    </Layout>
  );
}

PaymentSettingScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
