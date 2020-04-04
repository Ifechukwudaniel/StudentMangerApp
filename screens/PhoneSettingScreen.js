import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import PhoneSetting from '../components/PhoneSetting';

export default function PhoneSettingScreen(props) {
  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.container}>
         <PhoneSetting {...props}/>
      </ScrollView>
    </Layout>
  );
}

PhoneSettingScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
