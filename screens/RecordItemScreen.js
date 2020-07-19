import React from 'react';
import { ScrollView, StyleSheet , View, FlatList} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import HeaderComponent from '../components/Header';
import Attendance from '../components/Attendance';
import EStyleSheet from 'react-native-extended-stylesheet';
import AttendanceItem from '../components/Attendance/AttendanceItem';
import AttendanceHeader from '../components/Attendance/AttendanceHeader';
import _ from 'lodash'
export default function RecordItemScreen(props) {
   let data= _.toArray(props.navigation.state.params)
   let {title, courseCode} = data[0]
  return (
    <Layout style={styles.container}>
       <HeaderComponent backScreen= "Record" back {...props} screenName="RECORD"/>
       <AttendanceHeader title={title} courseCode={courseCode} />
       <FlatList
         data={data}
         renderItem= {(data)=><AttendanceItem id= {data.item._id}   {...data.item}/>}
         keyExtractor={item=>item._id}
       />
    </Layout>
  );
}

RecordItemScreen.navigationOptions = {
 header:null
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
});
