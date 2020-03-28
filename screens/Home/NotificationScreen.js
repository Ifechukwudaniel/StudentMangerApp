import React,{Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Notifications from '../../components/Notifications'

class NotificationScreen extends Component {
  render() { 
    return (
      <Layout style={styles.container}>
        <View style={styles.container}>
             <Notifications {...this.props}/>
        </View>
    </Layout>
    );
  }
}
 
export default  NotificationScreen;

NotificationScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
