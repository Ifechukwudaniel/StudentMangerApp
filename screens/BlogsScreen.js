import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Blog from '../components/Blog';

export default function BlogsScreen() {
  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.container}>
        <Blog/>
      </ScrollView>
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
