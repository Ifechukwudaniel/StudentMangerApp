import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Level from '../components/Level'
import Home from '../components/Home';
import HeaderComponent from '../components/Header';

class HomeScreen extends Component {
  render() { 
    return (
      <Layout style={styles.container}>
      <View style={styles.container}>
         <Home {...this.props}/>
      </View>
    </Layout>
    );
  }
}
 
export default HomeScreen;

HomeScreen.navigationOptions = {
  header:<HeaderComponent screenName="HOME"/>
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
