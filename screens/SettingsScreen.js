import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Setting from '../components/Settings';
import HeaderComponent from '../components/Header';

export default function SettingsScreen(props) {
  return (
    <Layout style={styles.container}>
    <HeaderComponent {...props}  screenName={"SETTINGS"} />
      <Setting/>
    </Layout>
  );
}

SettingsScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
