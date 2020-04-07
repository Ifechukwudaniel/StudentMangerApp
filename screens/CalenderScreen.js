import React,{Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import { MonoText } from '../components/StyledText';
import {  Layout } from '@ui-kitten/components';
import Calender from '../components/Attendance/Calender';


class CalenderScreen extends Component {
  render() { 
    return (
      <Layout style={styles.container}>
        <View style={styles.container}>
            <Calender  {...this.props}/>
        </View>   
    </Layout>
    );
  }
}
 
export default  CalenderScreen;

CalenderScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
