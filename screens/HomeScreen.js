import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

import { MonoText } from '../components/StyledText';
import {  Layout } from '@ui-kitten/components';
import Department from '../components/Department';

export default function HomeScreen() {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
         <Department/>
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
