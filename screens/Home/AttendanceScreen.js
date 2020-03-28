import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Attendance from '../../components/Attendance'

export default function AttendanceScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
         <Attendance {...props}/>
      </View>
    </Layout>
  );
}

AttendanceScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});