import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import TimeTable from '../../components/TimeTable'

export default function TimeTableScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
         <TimeTable {...props}/>
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