import React,{Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
// import { MonoText } from '../components/StyledText';
import {  Layout } from '@ui-kitten/components';
import Downloads from '../components/Downloads';


class FileScreen extends Component {
  render() { 
    return (
      <Layout style={styles.container}>
        <View style={styles.container}>
            <Downloads {...this.props}/>
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
