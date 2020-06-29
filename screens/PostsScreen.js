import React from 'react';
import { ScrollView,View, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import PostsHeader from '../components/Posts/PostHeaader';

export default function PostsScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
       <PostsHeader {...props}/>
      </View>
    </Layout>
  );
}

PostsScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
