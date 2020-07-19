import React from 'react';
import { ScrollView, StyleSheet , View} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import HeaderComponent from '../components/Header';
import Attendance from '../components/Attendance';
import EStyleSheet from 'react-native-extended-stylesheet';
export default function RecordScreen(props) {
  return (
    <Layout style={styles.container}>
       <HeaderComponent {...props} screenName="RECORD"/>
          <Attendance   {...props}/>
    </Layout>
  );
}

RecordScreen.navigationOptions = {
 header:null
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
});
