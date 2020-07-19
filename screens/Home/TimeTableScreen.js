import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import TimeTable from '../../components/TimeTable'
import HeaderComponent from '../../components/Header';
import Calender from '../../components/Attendance/Calender';

export default function TimeTableScreen(props) {
  return (
    <Layout style={styles.container}>
      <HeaderComponent {...props}  screenName={"TIMETABLE"} />
      <Calender/>
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