import React,{Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import { MonoText } from '../components/StyledText';
import {  Layout } from '@ui-kitten/components';
import Department from '../components/Department';

class FileScreen extends Component {
  render() { 
    return (
      <Layout style={styles.container}>
        <View style={styles.container}>
          
        </View>
    </Layout>
    );
  }
}
 
export default  FileScreen;

FileScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
