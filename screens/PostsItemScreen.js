import React from 'react';
import { ScrollView,View, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import PostsHeader from '../components/Posts/PostHeaader';
import PostItem from '../components/Posts/PostItem';

export default function PostsItemScreen(props) {
  return (
    <Layout style={styles.container}>
       <PostsHeader back backScreen = "Post" {...props}/>
      <PostItem {...props}/>
    </Layout>
  );
}

PostsItemScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
