import React from 'react';
import { ScrollView,View, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
// import Blog from '../components/Posts';

export default function BlogsScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
        {/* <Blog {...props}/> */}
      </View>
    </Layout>
  );
}

BlogsScreen.navigationOptions = {
  //title: 'Blogs',
  header:null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
