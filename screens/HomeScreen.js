import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

import { MonoText } from '../components/StyledText';
import {  Layout } from '@ui-kitten/components';
import Level from '../components/Level'
import Home from '../components/Home';

export default function HomeScreen() {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
       <Home/>
      </View>
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
