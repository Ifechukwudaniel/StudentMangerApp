import React,{Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import { MonoText } from '../components/StyledText';
import {  Layout } from '@ui-kitten/components';
import Department from '../components/Department';

class DepartmentScreen extends Component {
  render() { 
    return (
      <Layout style={styles.container}>
        <View style={styles.container}>
          <Department {...this.props} />
        </View>
    </Layout>
    );
  }
}
 
export default  DepartmentScreen;

DepartmentScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
