import React,{Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Graph from '../components/Attendance/Chart';


class GraphScreen extends Component {
  render() { 
    return (
      <Layout style={styles.container}>
        <View style={styles.container}>
            <Graph {...this.props}/>
        </View>   
    </Layout>
    );
  }
}
 
export default  GraphScreen;

GraphScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
