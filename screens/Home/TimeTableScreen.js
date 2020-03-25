import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';

export default function TimeTableScreen() {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
        
      </View>
    </Layout>
  );
}

TimeTableScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});