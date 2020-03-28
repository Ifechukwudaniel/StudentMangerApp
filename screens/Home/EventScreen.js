import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Event from '../../components/Event';

export default function EventScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
          <Event {...props}/>
      </View>
    </Layout>
  );
}

EventScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});