import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';

export default function SettingsScreen() {
  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.container}>
      
      </ScrollView>
    </Layout>
  );
}

SettingsScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
